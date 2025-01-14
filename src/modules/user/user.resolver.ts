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
import { ServiceRequest } from '../service-request';
import { Customer } from '../customer';
import { Employee } from '../employee/dto';
import { Review } from '../review';
import { ReviewResponse } from '../review-response';
import { JoinWorkshopRequest } from '../join-workshop-request';
import { UserReport } from '../user-report';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Query(() => User)
  async findUserById(
    @Args('userId', { type: () => GraphQLBigInt }) userId: bigint,
  ): Promise<User> {
    return this.userService.findUser({ where: { userId } });
  }

  @Query(() => User)
  async findUserByEmail(@Args('email') email: string): Promise<User> {
    return this.userService.findUser({ where: { email } });
  }

  @Query(() => [User])
  async findUsers(@Args() args: FindManyUserArgs): Promise<User[]> {
    return this.userService.findUsers(args);
  }

  // @Role(UserRole.ADMIN)
  // @UseGuards(UserJwtAuthGuard)
  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
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
