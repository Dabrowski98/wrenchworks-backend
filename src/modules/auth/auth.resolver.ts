import {
  Resolver,
  Query,
  Context,
  Mutation,
  Args,
  Int,
  GqlContextType,
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
// import { SignUpUserResponse } from './dto/sign-up-user.response';
import { SignInUserResponse } from './dto/sign-in-user.response';
// import { SignUpUserInput } from './dto/sign-up.user.input';
import { SignInUserInput } from './dto/sign-in-user.input';
import { User, UserCreateInput } from '../user/dto';
import { ContextType, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { UnauthorizedException } from '@nestjs/common';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';
import { SignUpUserInput } from './dto/sign-up.user.input';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async userSignUp(
    @Args('signUpInput') signUpUserInput: SignUpUserInput,
  ): Promise<User> {
    return this.authService.userSignUp(signUpUserInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => SignInUserResponse)
  async userSignIn(
    @Args('signInUserInput') signInUserInput: SignInUserInput,
    @Context() context: any,
  ): Promise<SignInUserResponse> {
    const deviceId =
      context.req.headers['device-id'] || `default-${context.user.userId}`;
    return this.authService.userSignIn(context.user, deviceId);
  }

  @Mutation(() => SignInUserResponse)
  async refreshTokens(
    @Args('sessionDataId', { type: () => GraphQLBigInt }) sessionDataId: bigint,
    @Args('refreshToken') refreshToken: string,
  ): Promise<SignInUserResponse> {
    try {
      return await this.authService.refreshTokens(sessionDataId, refreshToken);
    } catch (error) {
      throw new UnauthorizedException('Could not refresh tokens');
    }
  }

  @Mutation(() => Boolean)
  async logout(
    @Args('sessionDataId', { type: () => GraphQLBigInt }) sessionDataId: bigint,
  ): Promise<boolean> {
    await this.authService.revokeRefreshToken(sessionDataId);
    return true;
  }

  @Mutation(() => Boolean)
  async logoutAll(
    @Args('userId', { type: () => GraphQLBigInt }) userId: bigint,
  ): Promise<boolean> {
    await this.authService.revokeAllRefreshTokens(userId);
    return true;
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => String)
  async test(@Context() context: any): Promise<string> {
    return "LUKS"
  }
}
