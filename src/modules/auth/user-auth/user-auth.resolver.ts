import { Resolver, Mutation, Query, Args, Context } from '@nestjs/graphql';
import { UserAuthService } from './user-auth.service';
import { CreateOneUserArgs, User } from '../../user/dto';
import { UseGuards } from '@nestjs/common';
import { GraphQLBigInt } from 'graphql-scalars';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { UserJwtAuthGuard } from './guards/user-jwt-auth.guard';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { JwtUserPayload } from './custom-dto/jwt-user-payload';
import { DeviceData } from 'src/common/decorators/headers-decorators/device-data.decorator';
import { LoginAuthGuard } from './guards/user-local-auth.guard';
import { ChangePasswordInput } from '../common-dto';
import { AbilityFactory, Action } from '../../ability/ability.factory';
import { UserService } from 'src/modules/user/user.service';
import { CheckAbilities } from 'src/modules/ability/abilities.decorator';
import { AbilitiesGuard } from 'src/modules/ability/abilities.guard';
import { LoginUserInput } from './custom-dto/login-user.input';
import { LoginUserResponse } from './custom-dto/login-user.response';
import { ChangeUserPasswordArgs } from './custom-dto/change-user-password.args';

@UseGuards(UserJwtAuthGuard, AbilitiesGuard)
@Resolver()
export class UserAuthResolver {
  constructor(private readonly userAuthService: UserAuthService) {}

  // PUBLIC
  @Public()
  @Mutation(() => User)
  registerUser(@Args() args: CreateOneUserArgs): Promise<User> {
    return this.userAuthService.registerUser(args);
  }

  // PUBLIC
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

  // PUBLIC
  @Public()
  @Mutation(() => LoginUserResponse)
  refreshUserTokens(
    @Args('refreshToken') refreshToken: string,
    @DeviceData() deviceData: DeviceData,
  ): Promise<LoginUserResponse> {
    return this.userAuthService.refreshTokens(refreshToken, deviceData);
  }

  // USER
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  logoutUser(@Args('refreshToken') refreshToken: string): Promise<boolean> {
    return this.userAuthService.revokeRefreshToken(refreshToken);
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
    return this.userAuthService.revokeAllRefreshTokens(userId, currentUser);
  }

  // ADMIN can create admin
  @CheckAbilities({ action: Action.Create, subject: 'User' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => User)
  createAdmin(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: CreateOneUserArgs,
  ): Promise<User> {
    return this.userAuthService.createAdmin(currentUser, args);
  }

  // USER can change his password
  @CheckAbilities({ action: Action.Update, subject: 'User' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  changeUserPassword(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: ChangeUserPasswordArgs,
  ): Promise<boolean> {
    return this.userAuthService.changeUserPassword(currentUser, args);
  }
}
