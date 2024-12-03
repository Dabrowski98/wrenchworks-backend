import { Injectable, UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User, UserCreateInput } from '../user/dto';
// import { SignUpUserInput } from './dto/sign-up.user.input';
// import { SignUpUserResponse } from './dto/sign-up-user.response';
import { PrismaService } from 'src/database/prisma.service';
import { UserService } from '../user/user.service';
import { SignInUserResponse } from './dto/sign-in-user.response';
import { SignInUserInput } from './dto/sign-in-user.input';
import { SignUpUserInput } from './dto/sign-up.user.input';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async userSignUp(input: SignUpUserInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(input.password, 10);
    const userData = { ...input, password: hashedPassword };
    return this.userService.createUser(userData);
  }

  async userSignIn(user: User, deviceId: string): Promise<SignInUserResponse> {
    const { accessToken, refreshToken } = await this.generateTokens(user);
    await this.upsertRefreshToken(user.userId, refreshToken, deviceId);
    return { accessToken, refreshToken, user };
  }

  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.userService.findUser({ where: { email } });
    if (!user) return null;
    const isPasswordValid = await bcrypt.compare(pass, user.password);
    const { password, ...result } = user;
    return isPasswordValid ? result : null;
  }

  async generateTokens(
    user: User,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const payload = {
      email: user.email,
      sub: user.userId,
    };
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '15s',
      secret: process.env.ACCESS_SECRET,
    });
    const refreshToken = this.jwtService.sign(
      { payload, accessToken },
      { expiresIn: '30s', secret: process.env.REFRESH_SECRET },
    );
    return { accessToken, refreshToken };
  }

  async upsertRefreshToken(
    userId: bigint,
    refreshToken: string,
    deviceId: string,
  ) {
    const x = await this.jwtService.decode(refreshToken);
    await this.prisma.sessionData.upsert({
      where: { userId_deviceId: { userId, deviceId } },
      update: {
        refreshToken,
        revoked: false,
        issuedAt: new Date(x.iat * 1000),
        expiresAt: new Date(x.exp * 1000),
      },
      create: {
        userId,
        deviceId,
        refreshToken,
        revoked: false,
        issuedAt: new Date(x.iat * 1000),
        expiresAt: new Date(x.exp * 1000),
      },
    });
  }

  async revokeRefreshToken(sessionDataId: bigint) {
    await this.prisma.sessionData.update({
      where: { sessionDataId, revoked: false },
      data: { revoked: true },
    });
  }

  async revokeAllRefreshTokens(userId: bigint) {
    await this.prisma.sessionData.updateMany({
      where: { userId, revoked: false },
      data: { revoked: true },
    });
  }

  async refreshTokens(
    sessionDataId: bigint,
    refreshToken: string,
  ): Promise<SignInUserResponse> {
    const session = await this.prisma.sessionData.findUnique({
      where: { sessionDataId },
    });

    if (!session || session.revoked || session.expiresAt < new Date()) {
      throw new UnauthorizedException(
        'Refresh token not found, revoked, or expired',
      );
    }

    const isValid = await bcrypt.compare(refreshToken, session.refreshToken);
    if (!isValid) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const user = await this.userService.findUser({
      where: { userId: session.userId },
    });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const tokens = await this.generateTokens(user);
    await this.upsertRefreshToken(
      session.userId,
      tokens.refreshToken,
      session.deviceId,
    );
    await this.revokeRefreshToken(session.sessionDataId);

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user,
    };
  }
}
