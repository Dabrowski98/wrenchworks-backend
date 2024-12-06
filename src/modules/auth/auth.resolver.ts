import { Resolver, Mutation, Query, Args, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInUserResponse } from './dto/login-user.response';
import { LoginUserInput } from './dto/login-user.input';
import { RegisterUserInput } from './dto/register-user.input';
import { User } from '../user/dto';
import { ForbiddenException, UseGuards } from '@nestjs/common';
import { LoginAuthGuard } from './guards/login-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { IpAddress } from 'src/common/decorators/ip-address.decorator';
import { DeviceInfo } from 'src/common/decorators/device-info.decorator';
import { DeviceId } from 'src/common/decorators/device-id.decorator';
import { GraphQLBigInt } from 'graphql-scalars';
import { Public } from 'src/common/decorators/public.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UserRole } from '../prisma';
import { CreateAdminInput } from './dto/create-admin.input';
import { RolesGuard } from './guards/roles.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation(() => User)
  async registerUser(
    @Args('registerUserInput') registerUserInput: RegisterUserInput,
  ): Promise<User> {
    return this.authService.registerUser(registerUserInput);
  }

  @Public()
  @UseGuards(LoginAuthGuard)
  @Mutation(() => SignInUserResponse)
  async loginUser(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context: any,
    @DeviceId() deviceId: string,
    @IpAddress() ipAddress: string,
    @DeviceInfo() deviceInfo: string,
  ): Promise<SignInUserResponse> {
    console.log(context.req.user);
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
    @Context() context: any,
  ): Promise<boolean> {
    if (
      context.req.user.role === UserRole.USER &&
      context.req.user.userId != userId
    ) {
      throw new ForbiddenException('You can only logout your own sessions');
    }
    console.log(context.req.user.userId);
    console.log(userId);
    try {
      return await this.authService.revokeAllRefreshTokens(userId);
    } catch {
      return false;
    }
  }

  @Query(() => String)
  @Roles(UserRole.ADMIN)
  async adminTest(@Context() context: any) {
    return 'admin';
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(RolesGuard)
  @Mutation(() => User)
  async createAdmin(
    @Args('createAdminInput') createAdminInput: CreateAdminInput,
  ): Promise<User> {
    return this.authService.createAdmin(createAdminInput);
  }
}
