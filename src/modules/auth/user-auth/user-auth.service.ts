import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../../user/dto';
import { UserService } from '../../user/user.service';
import { LoginUserResponse } from './dto/login-user.response';
import { RegisterUserInput } from './dto/register-user.input';
import { v4 as uuidv4 } from 'uuid';
import { SessionData } from '@prisma/client';
import { UserRole } from '../../prisma';
import { CreateAdminInput } from './dto/create-admin.input';
import { EntityType } from 'src/common/enums/entity-type.enum';
import { SessionDataService } from 'src/modules/session-data/session-data.service';
import {
  BadRequestError,
  UnauthorizedError,
} from 'src/common/custom-errors/errors.config';
import { JwtUserPayload } from './dto/jwt-user-payload';
import { DeviceData } from 'src/common/decorators/headers-decorators/device-data.decorator';
import { ChangePasswordInput } from '../common-dto';

@Injectable()
export class UserAuthService {
  constructor(
    private readonly userService: UserService,
    private readonly sessionDataService: SessionDataService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(input: RegisterUserInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(
      input.password,
      Number(process.env.SALT_ROUNDS),
    );

    const userData = {
      ...input,
      password: hashedPassword,
      role: UserRole.USER,
    };

    //TODO: VERIFY TELEPHONE NUMBER.

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
    const user = await this.userService.findOneWithPassword({ where: { email } });
    if (!user) return null;
    const isPasswordValid = await bcrypt.compare(password, user.password);
    const { password: _, ...result } = user;

    return isPasswordValid ? result : null;
  }

  private async generateTokens(
    user: User,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const payload: JwtUserPayload = {
      sub: user.userId,
      entityType: EntityType.USER,
      role: user.role as UserRole,
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '15m',
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

    const sessions = await this.userService.sessionData(
      decodedRefreshToken.sub,
    );

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
      user: { connect: { userId: decodedRefreshToken.sub } },
      deviceId,
      ipAddress,
      deviceInfo,
      refreshToken,
      issuedAt: new Date(decodedRefreshToken.iat * 1000),
      expiresAt: new Date(decodedRefreshToken.exp * 1000),
    });
  }

  async revokeRefreshToken(refreshToken: string) {
    const decodedRefreshToken = await this.jwtService.decode(refreshToken);

    if (!decodedRefreshToken) return false;

    const result = await this.sessionDataService.delete(
      decodedRefreshToken.jti,
    );

    return result ? true : false;
  }

  async revokeAllRefreshTokens(userId: bigint) {
    const result = await this.sessionDataService.deleteMany({
      where: { userId: { equals: userId } },
    });

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

      const session = await this.sessionDataService.findSessionById(
        decodedRefreshToken.jti,
      );

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
    userId: bigint,
    changePasswordInput: ChangePasswordInput,
  ) {
    const user = await this.userService.findOneWithPassword({ where: { userId } });

    if (!user) throw new UnauthorizedError('User not found');

    const isPasswordValid = await bcrypt.compare(
      changePasswordInput.oldPassword,
      user.password,
    );

    if (!isPasswordValid) throw new UnauthorizedError('Invalid old password');

    if (changePasswordInput.oldPassword === changePasswordInput.newPassword)
      throw new BadRequestError(
        'New password cannot be the same as the old password',
      );

    const hashedPassword = await bcrypt.hash(
      changePasswordInput.newPassword,
      10,
    );

    return !!this.userService.update({
      where: { userId },
      data: { password: hashedPassword },
    });
  }

  async createAdmin(input: CreateAdminInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(input.password, 10);
    const userData = {
      ...input,
      password: hashedPassword,
      role: UserRole.ADMIN,
    };
    return this.userService.create(userData);
  }
}
