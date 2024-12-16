import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { GraphQLBigInt } from 'graphql-scalars';
import { FindManyUserArgs, FindUniqueUserArgs, User } from './dto';
import { UseGuards, UsePipes } from '@nestjs/common';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { UserJwtAuthGuard } from '../auth/user-auth/guards/user-jwt-auth.guard';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Query(() => User)
  async findUserById(
    @Args('userId', { type: () => GraphQLBigInt }) userId: bigint,
    @Args('options', { type: () => [Boolean], nullable: true })
    options?: {
      includeSessionData?: boolean;
      includeWorkshops?: boolean;
    },
  ): Promise<User> {
    return this.userService.findUserById(userId, options);
  }

  @Query(() => User)
  async findUserByEmail(
    @Args('email') email: string,
    @Args('options', { type: () => [Boolean] })
    options?: {
      includeSessionData?: boolean;
      includeWorkshops?: boolean;
    },
  ): Promise<User> {
    return this.userService.findUserByEmail(email, options);
  }

  @Query(() => [User])
  async findUsers(@Args() args: FindManyUserArgs): Promise<User[]> {
    return this.userService.findUsers(args);
  }

  // @Role(UserRole.ADMIN)
  @UseGuards(UserJwtAuthGuard)
  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }
}
