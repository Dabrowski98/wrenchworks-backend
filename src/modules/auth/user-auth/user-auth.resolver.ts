import { Resolver, Mutation, Query, Args, Context } from '@nestjs/graphql';
import { UserAuthService } from './user-auth.service';
import { LoginUserResponse } from './dto/login-user.response';
import { LoginUserInput } from './dto/login-user.input';
import { RegisterUserInput } from './dto/register-user.input';
import { User } from '../../user/dto';
import { ForbiddenException, UseGuards } from '@nestjs/common';
import { IpAddress } from 'src/common/decorators/headers-decorators/ip-address.decorator';
import { DeviceInfo } from 'src/common/decorators/headers-decorators/device-info.decorator';
import { DeviceId } from 'src/common/decorators/headers-decorators/device-id.decorator';
import { GraphQLBigInt } from 'graphql-scalars';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { Role } from 'src/common/decorators/guard-decorators/roles.decorator';
import { UserRole } from '../../prisma';
import { CreateAdminInput } from './dto/create-admin.input'; 
import { UserJwtAuthGuard } from './guards/user-jwt-auth.guard';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { ForbiddenError } from 'src/common/custom-errors/errors.config';
import { JwtUserPayload } from './dto/jwt-user-payload';
import { DeviceData } from 'src/common/decorators/headers-decorators/device-data.decorator';
import { LoginAuthGuard } from './guards/user-local-auth.guard';
import { RolesGuard } from '../common-guards/roles.guard';
import { ChangePasswordInput } from '../common-dto';

@UseGuards(UserJwtAuthGuard)
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
    @DeviceData() deviceData: DeviceData,
  ): Promise<LoginUserResponse> {
    return this.userAuthService.loginUser(
      context.user,
      deviceData,
    );
  }
 
  @Public()
  @Mutation(() => LoginUserResponse)
  async refreshTokens(
    @Args('refreshToken') refreshToken: string,
    @DeviceData() deviceData: DeviceData,
  ): Promise<LoginUserResponse> {
    return this.userAuthService.refreshTokens(
      refreshToken,
      deviceData,
    );
  }

  @Mutation(() => Boolean)
  async logoutUser(
    @Args('refreshToken') refreshToken: string,
  ): Promise<boolean> {
    try {
      await this.userAuthService.revokeRefreshToken(refreshToken);
    } catch {
      return false;
    }
    return true;
  }

  @Mutation(() => Boolean)
  async logoutAllUserSessions(
    @Args('userId', { type: () => GraphQLBigInt , nullable: true}) userId: bigint,
    @CurrentUser() currentUser: JwtUserPayload,
  ): Promise<boolean> {
    try {
      return await this.userAuthService.revokeAllRefreshTokens(userId);
    } catch {
      return false;
    }
  }

  @Role(UserRole.ADMIN)
  @UseGuards(RolesGuard)
  @Mutation(() => User)
  async createAdmin(
    @Args('createAdminInput') createAdminInput: CreateAdminInput,
  ): Promise<User> {
    return this.userAuthService.createAdmin(createAdminInput);
  }

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
  @Query(() => String)
  async UserTest(@CurrentUserID() userId: bigint) {
    console.log(userId);
    return 'Hello World from user';
  }
}
