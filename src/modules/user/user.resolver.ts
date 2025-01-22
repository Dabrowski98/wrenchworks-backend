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
import { UserReport } from '../user-report';
import { UserService } from './user.service';
import { Customer } from '../customer/dto';
import { JoinWorkshopRequest } from '../join-workshop-request/dto';
import { ServiceRequest } from '../service-request/dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Query(() => User)
  async findUserById(
    @Args('userId', { type: () => GraphQLBigInt }) userId: bigint,
  ): Promise<User> {
    return this.userService.findOne({ where: { userId } });
  }

  @Query(() => User)
  async findUserByEmail(@Args('email') email: string): Promise<User> {
    return this.userService.findOne({ where: { email } });
  }

  @Query(() => [User])
  async findUsers(@Args() args: FindManyUserArgs): Promise<User[]> {
    return this.userService.findMany(args);
  }

  // @Role(UserRole.ADMIN)
  // @UseGuards(UserJwtAuthGuard)
  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  // RESOLVER METHODS

  @ResolveField(() => Address)
  address(@Parent() user: User): Promise<Address> {
    return this.userService.address(user.userId);
  }

  @ResolveField(() => [Vehicle])
  vehicles(@Parent() user: User): Promise<Vehicle[]> {
    return this.userService.vehicles(user.userId);
  }

  @ResolveField(() => [ServiceRequest])
  serviceRequests(@Parent() user: User): Promise<ServiceRequest[]> {
    return this.userService.serviceRequests(user.userId);
  }

  @ResolveField(() => [Customer])
  customers(@Parent() user: User): Promise<Customer[]> {
    return this.userService.customers(user.userId);
  }

  @ResolveField(() => [Employee])
  employees(@Parent() user: User): Promise<Employee[]> {
    return this.userService.employees(user.userId);
  }

  @ResolveField(() => [Workshop])
  workshops(@Parent() user: User): Promise<Workshop[]> {
    return this.userService.workshops(user.userId);
  }

  @ResolveField(() => [Review])
  reviews(@Parent() user: User): Promise<Review[]> {
    return this.userService.reviews(user.userId);
  }

  @ResolveField(() => [ReviewResponse])
  reviewResponses(@Parent() user: User): Promise<ReviewResponse[]> {
    return this.userService.reviewResponses(user.userId);
  }

  @ResolveField(() => [UserReport])
  userReports(@Parent() user: User): Promise<UserReport[]> {
    return this.userService.userReports(user.userId);
  }

  @ResolveField(() => [JoinWorkshopRequest])
  joinWorkshopRequests(@Parent() user: User): Promise<JoinWorkshopRequest[]> {
    return this.userService.joinWorkshopRequests(user.userId);
  }

  @ResolveField(() => [SessionData])
  sessionData(@Parent() user: User): Promise<SessionData[]> {
    return this.userService.sessionData(user.userId);
  }

  @ResolveField(() => UserCount)
  async _count(@Parent() user: User): Promise<UserCount> {
    return this.userService.resolveCount(user.userId);
  }
}
