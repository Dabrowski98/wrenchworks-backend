import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { WorkshopService } from './workshop.service';
import {
  CreateOneWorkshopArgs,
  UpdateOneWorkshopArgs,
  Workshop,
  FindManyWorkshopArgs,
  FindUniqueWorkshopArgs,
  WorkshopCount,
  DeleteOneWorkshopArgs,
} from './dto';
import { GraphQLBigInt } from 'graphql-scalars';
import { WorkshopDetails } from '../workshop-details/dto';
import { Address } from '../address/dto';
import { WorkshopJob } from '../workshop-job/dto';
import { Review } from '../review/dto';
import { ServiceRequest } from '../service-request/dto';
import { NoDataProvidedForUpdateError } from 'src/common/custom-errors/errors.config';
import { JobCategory } from '../job-category/dto';
import { Service } from '../service/dto';
import { Customer } from '../customer/dto';
import { Employee } from '../employee/dto';
import { User } from '../user/dto';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { CheckAbilities, Action, AbilitiesGuard } from '../ability';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards/employee-jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentEmployee } from 'src/common/decorators/jwt-decorators/current-employee.decorator';
import { JwtEmployeePayload } from '../auth/employee-auth/dto';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { JwtUserPayload } from '../auth/user-auth/dto';

@OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
@Resolver(() => Workshop)
export class WorkshopResolver {
  constructor(private readonly workshopService: WorkshopService) {}

  // @Mutation(() => Workshop)
  // createWorkshop(
  //   @Args() args: CreateOneWorkshopArgs,
  //   @CurrentUserID() userId: bigint,
  // ): Promise<Workshop> {
  //   return this.workshopService.createWorkshop(args, userId);
  // }

  @Mutation(() => Workshop)
  updateWorkshop(@Args() args: UpdateOneWorkshopArgs): Promise<Workshop> {
    return this.workshopService.update(args);
  }

  @Mutation(() => Boolean)
  deleteWorkshop(@Args() args: DeleteOneWorkshopArgs): Promise<Boolean> {
    return this.workshopService.delete(args);
  }

  @Query(() => Workshop)
  workshop(@Args() args: FindUniqueWorkshopArgs): Promise<Workshop> {
    return this.workshopService.findOne(args);
  }

  @Query(() => [Workshop])
  workshops(@Args() args: FindManyWorkshopArgs): Promise<Workshop[]> {
    return this.workshopService.findMany(args);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Workshop' })
  @UseGuards(AbilitiesGuard)
  @Query(() => String)
  EmpTest(
    @CurrentEmployee() currentEmployee: JwtEmployeePayload,
    @CurrentUser() currentUser: JwtUserPayload,
  ) {
    console.log('--------------------');
    console.log(currentEmployee);
    console.log(currentUser);
    console.log('--------------------');

    return 'xd';
    // return `Hello World from ${currentEmployee.employeeId}, ${currentEmployee.entityType}, ${currentEmployee.loggedInBy}`;

  }

  //RESOLVE FIELDS

  @ResolveField(() => [Employee])
  employees(@Parent() workshop: Workshop): Promise<Employee[]> {
    return this.workshopService.employees(workshop.workshopId);
  }

  @ResolveField(() => [Customer])
  customers(@Parent() workshop: Workshop): Promise<Customer[]> {
    return this.workshopService.customers(workshop.workshopId);
  }

  @ResolveField(() => [Service])
  services(@Parent() workshop: Workshop): Promise<Service[]> {
    return this.workshopService.services(workshop.workshopId);
  }

  @ResolveField(() => [JobCategory])
  jobCategories(@Parent() workshop: Workshop): Promise<JobCategory[]> {
    return this.workshopService.jobCategories(workshop.workshopId);
  }

  @ResolveField(() => User)
  user(@Parent() workshop: Workshop): Promise<User> {
    return this.workshopService.user(workshop.workshopId);
  }

  @ResolveField(() => Address)
  address(@Parent() workshop: Workshop): Promise<Address> {
    return this.workshopService.address(workshop.workshopId);
  }

  @ResolveField(() => [WorkshopJob])
  workshopJobs(@Parent() workshop: Workshop): Promise<WorkshopJob[]> {
    return this.workshopService.workshopJobs(workshop.workshopId);
  }

  @ResolveField(() => [Review])
  reviews(@Parent() workshop: Workshop): Promise<Review[]> {
    return this.workshopService.reviews(workshop.workshopId);
  }

  @ResolveField(() => [ServiceRequest])
  serviceRequests(@Parent() workshop: Workshop): Promise<ServiceRequest[]> {
    return this.workshopService.serviceRequests(workshop.workshopId);
  }

  @ResolveField(() => WorkshopDetails)
  workshopDetails(@Parent() workshop: Workshop): Promise<WorkshopDetails> {
    return this.workshopService.workshopDetails(workshop.workshopId);
  }

  @ResolveField(() => WorkshopCount)
  async _count(@Parent() workshop: Workshop): Promise<WorkshopCount> {
    return this.workshopService.resolveCount(workshop.workshopId);
  }
}
