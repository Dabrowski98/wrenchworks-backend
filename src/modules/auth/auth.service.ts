import { Injectable, UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User, UserCreateInput } from '../user/dto';
// import { SignUpUserInput } from './dto/sign-up.user.input';
// import { SignUpUserResponse } from './dto/sign-up-user.response';
import { PrismaService } from 'src/database/prisma.service';
import { UserService } from '../user/user.service';
import { SignInUserResponse } from './dto/login-user.response';
import { LoginUserInput } from './dto/login-user.input';
import { RegisterUserInput } from './dto/register-user.input';
import { v4 as uuidv4 } from 'uuid';
import { SessionData } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  // TODO: Turn salt rounds into Peppers
  async registerUser(input: RegisterUserInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(input.password, 10);
    const userData = { ...input, password: hashedPassword };
    return this.userService.createUser(userData);
  }

  // TODO: limit the number of sessions per user.
  async loginUser(
    user: User,
    deviceId: string,
    ipAddress: string,
    deviceInfo: string,
  ): Promise<SignInUserResponse> {
    await this.revokeAllRefreshTokens(user.userId, deviceId);
    const { accessToken, refreshToken } = await this.generateTokens(user);
    await this.createSessionData(refreshToken, deviceId, ipAddress, deviceInfo);
    return { accessToken, refreshToken, user };
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findUser({ where: { email } });
    if (!user) return null;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    const { password: _, ...result } = user;

    return isPasswordValid ? result : null;
  }

  private async generateTokens(
    user: User,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const payload = { sub: user.userId };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '20s',
      secret: process.env.ACCESS_SECRET,
    });

    const refreshToken = this.jwtService.sign(payload, {
      jwtid: uuidv4(),
      expiresIn: '10s',
      secret: process.env.REFRESH_SECRET,
    });

    return { accessToken, refreshToken };
  }

  private async createSessionData(
    refreshToken: string,
    deviceId: string,
    ipAddress: string,
    deviceInfo: string,
  ) {
    const decodedRefreshToken = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_SECRET,
    });

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
    const decodedRefreshToken = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_SECRET,
    });

    await this.prisma.sessionData.updateMany({
      where: {
        sessionDataId: decodedRefreshToken.jti,
        revoked: false,
      },
      data: { revoked: true },
    });
  }

  async revokeAllRefreshTokens(userId: bigint, deviceId?: string) {
    const result = await this.prisma.sessionData.updateMany({
      where: {
        userId,
        deviceId,
        revoked: false,
        expiresAt: { gt: new Date() },
      },
      data: { revoked: true },
    });

    if (result.count === 0) return false;
    return true;
  }

  async refreshTokens(
    providedRefreshToken: string,
    deviceId: string,
    ipAddress: string,
    deviceInfo: string,
  ): Promise<SignInUserResponse> {
    const session = await this.getSession(providedRefreshToken);

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
    await this.revokeAllRefreshTokens(user.userId, deviceId);
    await this.createSessionData(refreshToken, deviceId, ipAddress, deviceInfo);

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

    if (session.revoked || session.expiresAt < new Date()) {
      await this.revokeAllRefreshTokens(session.userId);
      throw new UnauthorizedException('Refresh token revoked or expired');
    }

    try {
      await this.jwtService.verify(providedRefreshToken, {
        secret: process.env.REFRESH_SECRET,
      });
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }

    if (providedRefreshToken !== session.refreshToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }
    return session;
  }
}
