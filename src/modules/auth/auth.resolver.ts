import {
  Resolver,
  Mutation,
  Query,
  Args,
  Context,
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInUserResponse } from './dto/login-user.response';
import { LoginUserInput } from './dto/login-user.input';
import { RegisterUserInput } from './dto/register-user.input';
import { User } from '../user/dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { IpAddress } from 'src/common/decorators/ip-address.decorator';
import { DeviceInfo } from 'src/common/decorators/device-info.decorator';
import { DeviceId } from 'src/common/decorators/device-id.decorator';
import { GraphQLBigInt } from 'graphql-scalars';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async registerUser(
    @Args('registerUserInput') registerUserInput: RegisterUserInput,
  ): Promise<User> {
    return this.authService.registerUser(registerUserInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => SignInUserResponse)
  async loginUser(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context: any,
    @DeviceId() deviceId: string,
    @IpAddress() ipAddress: string,
    @DeviceInfo() deviceInfo: string,
  ): Promise<SignInUserResponse> {
    return this.authService.loginUser(
      context.user,
      deviceId,
      ipAddress,
      deviceInfo,
    );
  }

  @Mutation(() => SignInUserResponse)
  async refreshTokens(
    @Args('refreshToken') refreshToken: string,
    @DeviceId() deviceId: string,
    @IpAddress() ipAddress: string,
    @DeviceInfo() deviceInfo: string,
  ): Promise<SignInUserResponse> {
    return this.authService.refreshTokens(
      refreshToken,
      deviceId,
      ipAddress,
      deviceInfo,
    );
  }

  @Mutation(() => Boolean)
  async logout(@Args('refreshToken') refreshToken: string): Promise<boolean> {
    try {
      await this.authService.revokeRefreshToken(refreshToken);
    } catch {
      return false;
    }
    return true;
  }

  @Mutation(() => Boolean)
  async logoutAll(
    @Args('userId', { type: () => GraphQLBigInt }) userId: bigint,
    @Args('deviceId', { nullable: true }) deviceId?: string,
  ): Promise<boolean> {
    try {
      return await this.authService.revokeAllRefreshTokens(userId, deviceId);
    } catch {
      return false;
    }
  }
}