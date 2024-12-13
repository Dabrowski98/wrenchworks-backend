import { Resolver, Mutation, Query, Args, Context } from '@nestjs/graphql';
import { UserAuthService } from './user-auth.service';
import { LoginUserResponse } from './dto/login-user.response';
import { LoginUserInput } from './dto/login-user.input';
import { RegisterUserInput } from './dto/register-user.input';
import { User } from '../../user/dto';
import { ForbiddenException, UseGuards } from '@nestjs/common';
import { IpAddress } from 'src/common/decorators/get-decorators/ip-address.decorator';
import { DeviceInfo } from 'src/common/decorators/get-decorators/device-info.decorator';
import { DeviceId } from 'src/common/decorators/get-decorators/device-id.decorator';
import { GraphQLBigInt } from 'graphql-scalars';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { Role } from 'src/common/decorators/guard-decorators/roles.decorator';
import { UserRole } from '../../prisma';
import { CreateAdminInput } from './dto/create-admin.input';
import { RolesGuard } from '../auth-common-guards';
import { ENTITY_TYPE_KEY, EntityType, Type } from 'src/common/decorators/guard-decorators/entity-type.decorator';
import { LoginAuthGuard } from './guards/user-local-auth.guard';
import { CurrentUserID } from 'src/common/decorators/get-decorators/current-user-id.decorator';
import { ChangePasswordInput } from '../auth-common-dto';
import { UserJwtAuthGuard } from './guards/user-jwt-auth.guard';

@Resolver()
export class UserAuthResolver {
  constructor(private readonly userAuthService: UserAuthService) {}

  @Public()
  @Mutation(() => User)
  async registerUser(
    @Args('registerUserInput') registerUserInput: RegisterUserInput,
  ): Promise<User> {
    return this.userAuthService.registerUser(registerUserInput);
  }

  @Public()
  @UseGuards(LoginAuthGuard)
  @Mutation(() => LoginUserResponse)
  async loginUser(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context: any,
    @DeviceId() deviceId: string,
    @IpAddress() ipAddress: string,
    @DeviceInfo() deviceInfo: string,
  ): Promise<LoginUserResponse> {
    return this.userAuthService.loginUser(
      context.user,
      deviceId,
      ipAddress,
      deviceInfo,
    );
  }

  @Public()
  @Mutation(() => LoginUserResponse)
  async refreshTokens(
    @Args('refreshToken') refreshToken: string,
    @DeviceId() deviceId: string,
    @IpAddress() ipAddress: string,
    @DeviceInfo() deviceInfo: string,
  ): Promise<LoginUserResponse> {
    return this.userAuthService.refreshTokens(
      refreshToken,
      deviceId,
      ipAddress,
      deviceInfo,
    );
  }

  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  async logoutUser(@Args('refreshToken') refreshToken: string): Promise<boolean> {
    try {
      await this.userAuthService.revokeRefreshToken(refreshToken);
    } catch {
      return false;
    }
    return true;
  }

  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  async logoutAllUserSessions(
    @Args('userId', { type: () => GraphQLBigInt }) userId: bigint,
    @Context() context: any,
  ): Promise<boolean> {
    if (
      context.req.user.role === UserRole.USER &&
      context.req.user.userId != userId
    ) {
      throw new ForbiddenException('You can only logout your own sessions');
    }

    try {
      return await this.userAuthService.revokeAllRefreshTokens(userId);
    } catch {
      return false;
    }
  }

  @Role(UserRole.ADMIN)
  @UseGuards(UserJwtAuthGuard, RolesGuard)
  @Mutation(() => User)
  async createAdmin(
    @Args('createAdminInput') createAdminInput: CreateAdminInput,
  ): Promise<User> {
    return this.userAuthService.createAdmin(createAdminInput);
  }

  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  async changeUserPassword(
    @CurrentUserID() userId: bigint,
    @Args('changeUserPasswordInput') changePasswordInput: ChangePasswordInput,
  ): Promise<boolean> {
    try {
      return this.userAuthService.changeUserPassword(
        userId,
        changePasswordInput,
      );
    } catch {
      return false;
    }
  }

  @Public()
  @UseGuards(UserJwtAuthGuard)
  @Query(() => String)
  async UserTest(
    @CurrentUserID() userId: bigint,
  ) {
    console.log(userId);
    return 'Hello World from user';
  }
}
