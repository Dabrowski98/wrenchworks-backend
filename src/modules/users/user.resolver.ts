import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import {
  ChangePasswordInput,
  CreateUserInput,
  LinkUserToPersonInput,
  UpdateUserInput,
} from './dto/index';
import { Person } from '../persons/entities/person.entity';
import { PersonService } from '../persons/person.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly usersService: UserService, private readonly personsService: PersonService) {}

  @Mutation(() => User)
  async createUser(@Args('data') createUserInput: CreateUserInput) {
    return await this.usersService.createUser(createUserInput);
  }

  @Query(() => [User])
  async users() {
    return this.usersService.findUsers();
  }

  @Query(() => User)
  async user(@Args('userId', { type: () => BigInt }) userId: bigint) {
    return this.usersService.findUserById(userId);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('userId', { type: () => BigInt }) userId: bigint,
    @Args('data') updateUserInput: UpdateUserInput,
  ) {
    return this.usersService.updateUser(userId, updateUserInput);
  }

  @Mutation(() => User)
  async verifyEmail(@Args('userId', { type: () => BigInt }) userId: bigint) {
    return this.usersService.verifyEmail(userId);
  }

  @Mutation(() => User)
  async changePassword(
    @Args('userId', { type: () => BigInt }) userId: bigint,
    @Args('data') changePasswordInput: ChangePasswordInput,
  ) {
    return this.usersService.changePassword(userId, changePasswordInput);
  }

  @Mutation(() => User)
  async suspendUser(@Args('userId', { type: () => BigInt }) userId: bigint) {
    return this.usersService.suspendUser(userId);
  }

  @Mutation(() => User)
  async activateUser(@Args('userId', { type: () => BigInt }) userId: bigint) {
    return this.usersService.activateUser(userId);
  }

  @Mutation(() => User)
  async linkUserToPerson(
    @Args('linkUserToPersonInput') linkUserToPersonInput: LinkUserToPersonInput,
  ) {
    return this.usersService.linkUserToPerson(linkUserToPersonInput);
  }

  @Query(() => [User])
  async searchUsers(
    @Args('query') query: string,
    @Args('includeDeleted', { type: () => Boolean }) includeDeleted: boolean,
  ) {
    return this.usersService.searchUsers(query, includeDeleted);
  }

  @Mutation(() => User)
  async deleteUser(@Args('userId', { type: () => BigInt }) userId: bigint) {
    return this.usersService.deleteUser(userId);
  }

  @Mutation(() => User)
  async destroyUser(@Args('userId', { type: () => BigInt }) userId: bigint) {
    return this.usersService.destroyUser(userId);
  }

  @Mutation(() => User)
  async retrieveUser(@Args('userId', { type: () => BigInt }) userId: bigint) {
    return this.usersService.retrieveUser(userId);
  }
}
