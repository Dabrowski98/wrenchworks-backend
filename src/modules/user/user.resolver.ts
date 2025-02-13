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

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // PUBLIC
  @Public()
  @Query(() => User)
  async findUserById(
    @Args('userId', { type: () => GraphQLBigInt }) userId: bigint,
  ): Promise<User> {
    return this.userService.findOne({ where: { userId } });
  }

  // PUBLIC
  @Public()
  @Query(() => User)
  async findUserByEmail(@Args('email') email: string): Promise<User> {
    return this.userService.findOne({ where: { email } });
  }

  // PUBLIC
  @Public()
  @Query(() => [User])
  async findUsers(@Args() args?: FindManyUserArgs): Promise<User[]> {
    return this.userService.findMany(args);
  }

  // RESOLVER METHODS

  @CheckAbilities({ action: Action.Read, subject: 'Vehicle' })
  @ResolveField(() => [Vehicle])
  vehicles(@Parent() user: User): Promise<Vehicle[]> {
    return this.userService.vehicles(user.userId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'ServiceRequest' })
  @ResolveField(() => [ServiceRequest])
  serviceRequests(@Parent() user: User): Promise<ServiceRequest[]> {
    return this.userService.serviceRequests(user.userId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Customer' })
  @ResolveField(() => [Customer])
  customers(@Parent() user: User): Promise<Customer[]> {
    return this.userService.customers(user.userId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Employee' })
  @ResolveField(() => [Employee])
  employees(@Parent() user: User): Promise<Employee[]> {
    return this.userService.employees(user.userId);
  }

  @Public()
  @ResolveField(() => [Workshop])
  workshops(@Parent() user: User): Promise<Workshop[]> {
    return this.userService.workshops(user.userId);
  }

  @Public()
  @ResolveField(() => [Review])
  reviews(@Parent() user: User): Promise<Review[]> {
    return this.userService.reviews(user.userId);
  }

  @Public()
  @ResolveField(() => [ReviewResponse])
  reviewResponses(@Parent() user: User): Promise<ReviewResponse[]> {
    return this.userService.reviewResponses(user.userId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'UserReport' })
  @ResolveField(() => [UserReport])
  userReports(@Parent() user: User): Promise<UserReport[]> {
    return this.userService.userReports(user.userId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'JoinWorkshopRequest' })
  @ResolveField(() => [JoinWorkshopRequest])
  joinWorkshopRequests(@Parent() user: User): Promise<JoinWorkshopRequest[]> {
    return this.userService.joinWorkshopRequests(user.userId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'SessionData' })
  @ResolveField(() => [SessionData])
  sessionData(@Parent() user: User): Promise<SessionData[]> {
    return this.userService.sessionData(user.userId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'User' })
  @ResolveField(() => UserCount)
  async _count(@Parent() user: User): Promise<UserCount> {
    return this.userService.resolveCount(user.userId);
  }
}
