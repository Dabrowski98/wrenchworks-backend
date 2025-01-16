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
import { UserAbilityFactory, Action } from '../../ability/user-ability.factory';
import { UserService } from 'src/modules/user/user.service';
import { CheckAbilities } from 'src/modules/ability/abilities.decorator';
import { AbilitiesGuard } from 'src/modules/ability/abilities.guard';

@UseGuards(UserJwtAuthGuard, AbilitiesGuard)
@Resolver()
export class UserAuthResolver {
  constructor(
    private readonly userAuthService: UserAuthService,
    private readonly userAbilityFactory: UserAbilityFactory,
    private readonly userService: UserService,
  ) {}

  @Public()
  @Mutation(() => User)
  registerUser(
    @Args('registerUserInput') registerUserInput: RegisterUserInput,
  ): Promise<User> {
    return this.userAuthService.registerUser(registerUserInput);
  } 

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

  @Public()
  @Mutation(() => LoginUserResponse)
  refreshTokens(
    @Args('refreshToken') refreshToken: string,
    @DeviceData() deviceData: DeviceData,
  ): Promise<LoginUserResponse> {
    return this.userAuthService.refreshTokens(refreshToken, deviceData);
  }

  @CheckAbilities({ action: Action.Update, subject: User })
  @Mutation(() => Boolean)
  logoutUser(
    @Args('refreshToken') refreshToken: string,
  ): Promise<boolean> {

    return this.userAuthService.revokeRefreshToken(refreshToken)
    .then(() => true)
    .catch(() => false);
  }

  @CheckAbilities({ action: Action.Update, subject: User })
  @Mutation(() => Boolean)
  logoutAllUserSessions(
    @Args('userId', { type: () => GraphQLBigInt, nullable: true })
    userId: bigint,
    @CurrentUser() currentUser: JwtUserPayload,
  ): Promise<boolean> {
    return this.userAuthService.revokeAllRefreshTokens(userId)
    .then(() => true)
    .catch(() => false);
  }

  @CheckAbilities({ action: Action.Create, subject: User })
  @Mutation(() => User)
  createAdmin(
    @Args('createAdminInput') createAdminInput: CreateAdminInput,
  ): Promise<User> {
    return this.userAuthService.createAdmin(createAdminInput);
  }

  @CheckAbilities({ action: Action.Update, subject: User })
  @Mutation(() => Boolean)
  changeUserPassword(
    @CurrentUserID() userId: bigint,
    @Args('changeUserPasswordInput') changePasswordInput: ChangePasswordInput,
  ): Promise<boolean> {
    return this.userAuthService.changeUserPassword(
      userId,
      changePasswordInput,
    )
    .then(() => true)
    .catch(() => false);
  }

  @CheckAbilities({ action: Action.Delete, subject: User })
  @Query(() => String)
  UserTest(@CurrentUserID() currentUserId: bigint) {
    return 'Hello World from user';
  }

  @CheckAbilities({ action: Action.Read, subject: User})
  @Query(() => String)
  AdminTest() {
    return 'Hello World from admin';
  }
}