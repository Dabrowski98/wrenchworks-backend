import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { FindManyUserArgs, FindUniqueUserArgs, User, UserCount } from './dto';
import { UseGuards, UsePipes } from '@nestjs/common';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { UserJwtAuthGuard } from '../auth/user-auth/guards/user-jwt-auth.guard';
import { Workshop } from '../workshop/dto';
import { SessionData } from '../session-data/dto';
import { Address } from '../address/dto';
import { Vehicle } from '../vehicle/dto';
import { Employee } from '../employee/dto';
import { Review } from '../review/dto';
import { ReviewResponse } from '../review-response/dto';
import { UserReport } from '../user-report/dto';
import { UserService } from './user.service';
import { Customer } from '../customer/dto';
import { JoinWorkshopRequest } from '../join-workshop-request/dto';
import { ServiceRequest } from '../service-request/dto';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { CheckAbilities } from '../ability';
import { Action } from '../ability';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards/employee-jwt-auth.guard';
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';
import { PureAbility } from '@casl/ability';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'User' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => User)
  async findUserById(
    @Args('userId', { type: () => GraphQLBigInt }) userId: bigint,
  ): Promise<User> {
    return this.userService.findOne({ where: { userId } });
  }

  // PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'User' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => User)
  async findUserByEmail(@Args('email') email: string): Promise<User> {
    return this.userService.findOne({ where: { email } });
  }

  // PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'User' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [User])
  async findUsers(@Args() args?: FindManyUserArgs): Promise<User[]> {
    return this.userService.findMany(args);
  }

  // RESOLVER METHODS
 
  @ResolveField(() => [Vehicle])
  vehicles(
    @CurrentAbility() ability: PureAbility,
    @Parent() user: User,
  ): Promise<Vehicle[]> {
    return this.userService.vehicles(ability, user.userId);
  }
 
  @ResolveField(() => [ServiceRequest])
  serviceRequests(
    @CurrentAbility() ability: PureAbility,
    @Parent() user: User,
  ): Promise<ServiceRequest[]> {
    return this.userService.serviceRequests(ability, user.userId);
  }
 
  @ResolveField(() => [Customer])
  customers(
    @CurrentAbility() ability: PureAbility,
    @Parent() user: User,
  ): Promise<Customer[]> {
    return this.userService.customers(ability, user.userId);
  }
 
  @ResolveField(() => [Employee])
  employees(
    @CurrentAbility() ability: PureAbility,
    @Parent() user: User,
  ): Promise<Employee[]> {
    return this.userService.employees(ability, user.userId);
  }

  @Public()
  @ResolveField(() => [Workshop])
  workshops(
    @CurrentAbility() ability: PureAbility,
    @Parent() user: User,
  ): Promise<Workshop[]> {
    return this.userService.workshops(ability, user.userId);
  }

  @Public()
  @ResolveField(() => [Review])
  reviews(
    @CurrentAbility() ability: PureAbility,
    @Parent() user: User,
  ): Promise<Review[]> {
    return this.userService.reviews(ability, user.userId);
  }

  @Public()
  @ResolveField(() => [ReviewResponse])
  reviewResponses(
    @CurrentAbility() ability: PureAbility,
    @Parent() user: User,
  ): Promise<ReviewResponse[]> {
    return this.userService.reviewResponses(ability, user.userId);
  }
 
  @ResolveField(() => [UserReport])
  userReports(
    @CurrentAbility() ability: PureAbility,
    @Parent() user: User,
  ): Promise<UserReport[]> {
    return this.userService.userReports(ability, user.userId);
  }
 
  @ResolveField(() => [JoinWorkshopRequest])
  joinWorkshopRequests(
    @CurrentAbility() ability: PureAbility,
    @Parent() user: User,
  ): Promise<JoinWorkshopRequest[]> {
    return this.userService.joinWorkshopRequests(ability, user.userId);
  }
 
  @ResolveField(() => [SessionData])
  sessionData(
    @CurrentAbility() ability: PureAbility,
    @Parent() user: User,
  ): Promise<SessionData[]> {
    return this.userService.sessionData(ability, user.userId);
  }
 
  @ResolveField(() => UserCount)
  async _count(
    @CurrentAbility() ability: PureAbility,
    @Parent() user: User,
  ): Promise<UserCount> {
    return this.userService.resolveCount(ability, user.userId);
  }
}
