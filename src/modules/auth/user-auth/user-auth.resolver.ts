import { Resolver, Mutation, Query, Args, Context } from '@nestjs/graphql';
import { UserAuthService } from './user-auth.service';
import { LoginUserResponse } from './dto/login-user.response';
import { LoginUserInput } from './dto/login-user.input';
import { RegisterUserInput } from './dto/register-user.input';
import { User } from '../../user/dto';
import { UseGuards } from '@nestjs/common';
import { GraphQLBigInt } from 'graphql-scalars';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { CreateAdminInput } from './dto/create-admin.input';
import { UserJwtAuthGuard } from './guards/user-jwt-auth.guard';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { JwtUserPayload } from './dto/jwt-user-payload';
import { DeviceData } from 'src/common/decorators/headers-decorators/device-data.decorator';
import { LoginAuthGuard } from './guards/user-local-auth.guard';
import { ChangePasswordInput } from '../common-dto';
import { AbilityFactory, Action } from '../../ability/ability.factory';
import { UserService } from 'src/modules/user/user.service';
import { CheckAbilities } from 'src/modules/ability/abilities.decorator';
import { AbilitiesGuard } from 'src/modules/ability/abilities.guard';

@UseGuards(UserJwtAuthGuard, AbilitiesGuard)
@Resolver()
export class UserAuthResolver {
  constructor(
    private readonly userAuthService: UserAuthService,
    private readonly userAbilityFactory: AbilityFactory,
    private readonly userService: UserService,
  ) {}

  // ANYONE can register user
  @Public()
  @Mutation(() => User)
  registerUser(
    @Args('registerUserInput') registerUserInput: RegisterUserInput,
  ): Promise<User> {
    return this.userAuthService.registerUser(registerUserInput);
  }

  // ANYONE can login
  @Public()
  @UseGuards(LoginAuthGuard)
  @Mutation(() => LoginUserResponse)
  loginUser(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context: any,
    @DeviceData() deviceData: DeviceData,
  ): Promise<LoginUserResponse> {
    return this.userAuthService.loginUser(context.user, deviceData);
  }

  // ANYONE can refresh tokens
  @Public()
  @Mutation(() => LoginUserResponse)
  refreshTokens(
    @Args('refreshToken') refreshToken: string,
    @DeviceData() deviceData: DeviceData,
  ): Promise<LoginUserResponse> {
    return this.userAuthService.refreshTokens(refreshToken, deviceData);
  }

  // USER can logout himself
  @CheckAbilities({ action: Action.Update, subject: 'User' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  logoutUser(@Args('refreshToken') refreshToken: string): Promise<boolean> {
    return this.userAuthService
      .revokeRefreshToken(refreshToken)
      .then(() => true)
      .catch(() => false);
  }

  // USER can logout all his sessions
  @CheckAbilities({ action: Action.Update, subject: 'User' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  logoutAllUserSessions(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args('userId', { type: () => GraphQLBigInt, nullable: true })
    userId: bigint,
  ): Promise<boolean> {
    return this.userAuthService
      .revokeAllRefreshTokens(userId)
      .then(() => true)
      .catch(() => false);
  }

  // ADMIN can create admin
  @CheckAbilities({ action: Action.Create, subject: 'User' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => User)
  createAdmin(
    @Args('createAdminInput') createAdminInput: CreateAdminInput,
  ): Promise<User> {
    return this.userAuthService.createAdmin(createAdminInput);
  }

  // USER can change his password
  @CheckAbilities({ action: Action.Update, subject: 'User' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  changeUserPassword(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args('changeUserPasswordInput') changePasswordInput: ChangePasswordInput,
  ): Promise<boolean> {
    return this.userAuthService
      .changeUserPassword(currentUser.userId, changePasswordInput)
      .then(() => true)
      .catch(() => false);
  }
}
