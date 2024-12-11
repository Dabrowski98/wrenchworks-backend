import { BadRequestException, Injectable, UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User, UserCreateInput } from '../../user/dto';
// import { SignUpUserInput } from './dto/sign-up.user.input';
// import { SignUpUserResponse } from './dto/sign-up-user.response';
import { PrismaService } from 'src/database/prisma.service';
import { UserService } from '../../user/user.service';
import { LoginUserResponse } from './dto/login-user.response';
import { LoginUserInput } from './dto/login-user.input';
import { RegisterUserInput } from './dto/register-user.input';
import { v4 as uuidv4 } from 'uuid';
import { SessionData } from '@prisma/client';
import { UserRole } from '../../prisma';
import { CreateAdminInput } from './dto/create-admin.input';
import { Type } from 'src/common/decorators/guard-decorators/entity-type.decorator';
import { ChangePasswordInput } from '../auth-common-dto';

const MAX_SESSIONS_PER_USER = 5;

@Injectable()
export class UserAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(input: RegisterUserInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(input.password, 10);
    const userData = {
      ...input,
      password: hashedPassword,
      role: UserRole.USER,
    };

    //TODO: VERIFY TELEPHONE NUMBER.

    return this.userService.createUser(userData);
  }

  async loginUser(
    user: User,
    deviceId: string,
    ipAddress: string,
    deviceInfo: string,
  ): Promise<LoginUserResponse> {
    const { accessToken, refreshToken } = await this.generateTokens(user);
    await this.createNewSessionData(
      refreshToken,
      deviceId,
      ipAddress,
      deviceInfo,
    );
    console.log(user)
    return { accessToken, refreshToken, user };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findUser({ where: { email } });
    if (!user) return null;
    const isPasswordValid = await bcrypt.compare(password, user.password);
    const { password: _, ...result } = user;

    return isPasswordValid ? result : null;
  }

  private async generateTokens(
    user: User,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const payload = { sub: user.userId, entityType: Type.USER, role: user.role, };

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
    deviceId: string,
    ipAddress: string,
    deviceInfo: string,
  ) {
    const decodedRefreshToken = await this.jwtService.verify(refreshToken, {
      secret: process.env.USER_REFRESH_SECRET,
    });

    const allUserSessions = await this.prisma.sessionData.findMany({
      where: {
        userId: decodedRefreshToken.sub,
      },
    });

    const session = allUserSessions.find((a) => a.deviceId === deviceId);

    if (session) {
      await this.revokeRefreshToken(session.refreshToken);
    } else if (allUserSessions.length >= MAX_SESSIONS_PER_USER) {
      const oldestSession = allUserSessions.sort(
        (a, b) => a.issuedAt.getTime() - b.issuedAt.getTime(),
      )[0];
      await this.revokeRefreshToken(oldestSession.refreshToken);
    }

    await this.prisma.sessionData.create({
      data: {
        sessionDataId: decodedRefreshToken.jti,
        userId: decodedRefreshToken.sub,
        deviceId,
        ipAddress,
        deviceInfo,
        refreshToken,
        issuedAt: new Date(decodedRefreshToken.iat * 1000),
        expiresAt: new Date(decodedRefreshToken.exp * 1000),
      },
    });
  }

  async revokeRefreshToken(refreshToken: string) {
    const decodedRefreshToken = await this.jwtService.decode(refreshToken);

    if (!decodedRefreshToken) return false;

    const result = await this.prisma.sessionData.delete({
      where: { sessionDataId: decodedRefreshToken.jti },
    });

    return result ? true : false;
  }

  async revokeAllRefreshTokens(userId: bigint) {
    const result = await this.prisma.sessionData.deleteMany({
      where: {
        userId,
      },
    });

    return result.count > 0 ? true : false;
  }

  async refreshTokens(
    currentRT: string,
    deviceId: string,
    ipAddress: string,
    deviceInfo: string,
  ): Promise<LoginUserResponse> {
    const session = await this.getSession(currentRT);

    if (!session) {
      throw new UnauthorizedException('Invalid refresh token');
    }
    const user = await this.userService.findUser({
      where: { userId: session.userId },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const { accessToken, refreshToken } = await this.generateTokens(user);
    await this.revokeRefreshToken(currentRT);
    await this.createNewSessionData(
      refreshToken,
      deviceId,
      ipAddress,
      deviceInfo,
    );
    return { accessToken, refreshToken, user };
  }

  private async getSession(providedRefreshToken: string): Promise<SessionData> {
    const decodedRefreshToken = this.jwtService.decode(providedRefreshToken);

    if (!decodedRefreshToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const session = await this.prisma.sessionData.findUnique({
      where: { sessionDataId: decodedRefreshToken.jti },
    });

    if (!session) {
      throw new UnauthorizedException('Refresh token not found');
    }

    if (session.expiresAt < new Date()) {
      await this.revokeAllRefreshTokens(session.userId);
      throw new UnauthorizedException('Refresh token revoked or expired');
    }

    try {
      await this.jwtService.verify(providedRefreshToken, {
        secret: process.env.USER_REFRESH_SECRET,
      });
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }

    if (providedRefreshToken !== session.refreshToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }
    return session;
  }

  async changeUserPassword(userId: bigint, changePasswordInput: ChangePasswordInput) {
    const user = await this.userService.findUser({
      where: { userId },
    });

    if (!user) throw new UnauthorizedException('User not found');

    const isPasswordValid = await bcrypt.compare(changePasswordInput.oldPassword, user.password);

    if (!isPasswordValid) throw new UnauthorizedException('Invalid old password');

    if (changePasswordInput.oldPassword === changePasswordInput.newPassword) throw new BadRequestException('New password cannot be the same as the old password');

    const hashedPassword = await bcrypt.hash(changePasswordInput.newPassword, 10);

    const result =await this.prisma.user.update({
      where: { userId },
      data: { password: hashedPassword },
    });

    return result ? true : false;
  }

  async createAdmin(input: CreateAdminInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(input.password, 10);
    const userData = {
      ...input,
      password: hashedPassword,
      role: UserRole.ADMIN,
    };
    return this.userService.createUser(userData);
  }
}
