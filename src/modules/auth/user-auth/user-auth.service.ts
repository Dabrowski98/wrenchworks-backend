import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateOneUserArgs, User } from '../../user/dto';
import { UserService } from 'src/modules/user/user.service';
import { EntityType } from 'src/common/enums/entity-type.enum';
import { SessionDataService } from 'src/modules/session-data/session-data.service';
import {
  BadRequestError,
  CustomForbiddenError,
  UnauthorizedError,
} from 'src/common/custom-errors/errors.config';
import { JwtUserPayload } from './custom-dto/jwt-user-payload';
import { DeviceData } from 'src/common/decorators/headers-decorators/device-data.decorator';
import { ChangePasswordInput } from '../common-dto';
import { PrismaService } from 'src/database/prisma.service';
import { UserRole } from 'src/modules/prisma/dto';
import { SessionData } from 'src/modules/session-data/dto';
import { v4 as uuidv4 } from 'uuid';
import { AbilityFactory } from 'src/modules/ability/ability.factory';
import { ForbiddenError, subject } from '@casl/ability';
import { Action } from 'src/modules/ability/ability.factory';
import { ChangeUserPasswordArgs } from './custom-dto/change-user-password.args';
import { LoginUserResponse } from './custom-dto/login-user.response';

@Injectable()
export class UserAuthService {
  constructor(
    private readonly userService: UserService,
    private readonly sessionDataService: SessionDataService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly userAbilityFactory: AbilityFactory,
  ) {}

  async registerUser(input: CreateOneUserArgs): Promise<User> {
    const { email, password, username, telephoneNumber } = input.data;
    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT_ROUNDS),
    );

    const userData = {
      email,
      password: hashedPassword,
      username,
      telephoneNumber,
      role: UserRole.USER,
    };

    // TELEPHONE NUMBER VERIFICATION

    return this.userService.create(userData);
  }

  async loginUser(
    user: User,
    deviceData: DeviceData,
  ): Promise<LoginUserResponse> {
    const { accessToken, refreshToken } = await this.generateTokens(user);
    await this.createNewSessionData(refreshToken, deviceData);
    return { accessToken, refreshToken, user };
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOneWithPassword({
      where: { email },
    });
    if (!user) return null;
    const isPasswordValid = await bcrypt.compare(password, user.password);
    const { password: _, ...result } = user;

    return isPasswordValid ? result : null;
  }

  private async generateTokens(
    user: User,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const payload: JwtUserPayload = {
      userId: user.userId,
      entityType: EntityType.USER,
      role: user.role as UserRole,
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '1d',
      secret: process.env.USER_ACCESS_SECRET,
    });

    const refreshToken = this.jwtService.sign(payload, {
      jwtid: uuidv4(),
      expiresIn: '1d',
      secret: process.env.USER_REFRESH_SECRET,
    });

    return { accessToken, refreshToken };
  }

  private async createNewSessionData(
    refreshToken: string,
    deviceData: DeviceData,
  ) {
    const { deviceId, ipAddress, deviceInfo, deviceSerialNumber } = deviceData;

    const decodedRefreshToken = await this.jwtService.verify(refreshToken, {
      secret: process.env.USER_REFRESH_SECRET,
    });
    const sessions = await this.prisma.sessionData.findMany({
      where: { userId: decodedRefreshToken.userId },
    });

    const sessionData = sessions.find((a) => a.deviceId === deviceId);

    if (sessionData) {
      await this.revokeRefreshToken(sessionData.refreshToken);
    } else if (sessions.length >= Number(process.env.USER_MAX_SESSIONS)) {
      const oldestSession = sessions.sort(
        (a, b) => a.issuedAt.getTime() - b.issuedAt.getTime(),
      )[0];
      await this.revokeRefreshToken(oldestSession.refreshToken);
    }

    await this.sessionDataService.create({
      sessionDataId: decodedRefreshToken.jti,
      user: { connect: { userId: decodedRefreshToken.userId } },
      deviceId,
      ipAddress,
      deviceInfo,
      refreshToken,
      issuedAt: new Date(decodedRefreshToken.iat * 1000),
      expiresAt: new Date(decodedRefreshToken.exp * 1000),
    });
  }

  async revokeRefreshToken(refreshToken: string): Promise<boolean> {
    const decodedRefreshToken = await this.jwtService.decode(refreshToken);

    if (!decodedRefreshToken) return false;

    const result = await this.sessionDataService.delete({
      where: { sessionDataId: decodedRefreshToken.jti },
    });

    return !!result;
  }

  async revokeAllRefreshTokens(
    userId: bigint,
    currentUser?: JwtUserPayload,
  ): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { userId: currentUser.userId },
    });
    if (!user) throw new UnauthorizedError('User not found');
    if (currentUser) {
      const ability = await this.userAbilityFactory.defineAbility(currentUser);
      ForbiddenError.from(ability).throwUnlessCan(
        Action.Update,
        subject('User', user),
      );
    }
    const result = await this.sessionDataService.deleteMany(userId);
    return !!result;
  }

  async refreshTokens(
    currentRT: string,
    deviceData: DeviceData,
  ): Promise<LoginUserResponse> {
    const session = await this.getSession(currentRT);
    const user = await this.userService.findOne({
      where: { userId: session.userId },
    });

    const { accessToken, refreshToken } = await this.generateTokens(user);
    await this.revokeRefreshToken(currentRT);
    await this.createNewSessionData(refreshToken, deviceData);
    return { accessToken, refreshToken, user };
  }

  private async getSession(providedRefreshToken: string): Promise<SessionData> {
    try {
      const decodedRefreshToken = this.jwtService.decode(providedRefreshToken);

      if (!decodedRefreshToken) {
        throw new UnauthorizedError('Invalid refresh token');
      }

      const session = await this.prisma.sessionData.findUnique({
        where: { sessionDataId: decodedRefreshToken.jti },
      });

      if (session.expiresAt < new Date()) {
        await this.revokeAllRefreshTokens(session.userId);
        throw new UnauthorizedError('Refresh token revoked or expired');
      }

      await this.jwtService.verify(providedRefreshToken, {
        secret: process.env.USER_REFRESH_SECRET,
      });

      if (providedRefreshToken !== session.refreshToken) {
        throw new UnauthorizedError('Invalid refresh token');
      }

      return session;
    } catch (error) {
      throw new UnauthorizedError('Invalid refresh token');
    }
  }

  async changeUserPassword(
    currentUser: JwtUserPayload,
    changeUserPasswordArgs: ChangeUserPasswordArgs,
  ) {
    const { where, data } = changeUserPasswordArgs;
    const ability = await this.userAbilityFactory.defineAbility(currentUser);
    const user = await this.userService.findOneWithPassword({
      where,
    });
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('User', user),
    );

    if (!user) throw new UnauthorizedError('User not found');

    const isPasswordValid = await bcrypt.compare(
      data.oldPassword,
      user.password,
    );

    if (!isPasswordValid) throw new UnauthorizedError('Invalid old password');

    if (data.oldPassword === data.newPassword)
      throw new BadRequestError(
        'New password cannot be the same as the old password',
      );

    const hashedPassword = await bcrypt.hash(data.newPassword, 10);

    return !!this.userService.update({
      where,
      data: { password: hashedPassword },
    });
  }

  async createAdmin(
    currentUser: JwtUserPayload,
    args: CreateOneUserArgs,
  ): Promise<User> {
    if (currentUser.role !== UserRole.SUPERADMIN)
      throw new CustomForbiddenError(
        'You are not authorized to perform this action',
      );

    const { email, password, username, telephoneNumber } = args.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = {
      email,
      password: hashedPassword,
      username,
      telephoneNumber,
      role: UserRole.ADMIN,
    };
    return this.userService.create(userData);
  }

  async removeUserAccount(
    currentUser: JwtUserPayload,
    password: string,
    userId: bigint,
  ): Promise<boolean> {
    const ability = await this.userAbilityFactory.defineAbility(currentUser);
    const user = await this.userService.findOneWithPassword({
      where: { userId },
    });
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('User', user as any),
    );
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedError('Invalid password');

    return this.userService
      .delete({ where: { userId } })
      .then(() => true)
      .catch(() => false);
  }
}
