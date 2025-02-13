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
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';

@OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
@Resolver(() => Workshop)
export class WorkshopResolver {
  constructor(private readonly workshopService: WorkshopService) {}

  // ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'Workshop' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Workshop)
  updateWorkshop(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: UpdateOneWorkshopArgs,
  ): Promise<Workshop> {
    return this.workshopService.update(currentEntity, args);
  }

  // ADMIN, OWNER
  @CheckAbilities({ action: Action.Delete, subject: 'Workshop' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  deleteWorkshop(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: DeleteOneWorkshopArgs,
  ): Promise<Boolean> {
    return this.workshopService.delete(currentUser, args);
  }

  // PUBLIC
  @Public()
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => Workshop)
  workshop(@Args() args: FindUniqueWorkshopArgs): Promise<Workshop> {
    return this.workshopService.findOne(args);
  }

  // PUBLIC
  @Public()
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [Workshop])
  workshops(@Args() args?: FindManyWorkshopArgs): Promise<Workshop[]> {
    return this.workshopService.findMany(args);
  }

  //RESOLVE FIELDS

  @CheckAbilities({ action: Action.Read, subject: 'Employee' })
  @ResolveField(() => [Employee])
  employees(@Parent() workshop: Workshop): Promise<Employee[]> {
    return this.workshopService.employees(workshop.workshopId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Customer' })
  @ResolveField(() => [Customer])
  customers(@Parent() workshop: Workshop): Promise<Customer[]> {
    return this.workshopService.customers(workshop.workshopId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Service' })
  @ResolveField(() => [Service])
  services(@Parent() workshop: Workshop): Promise<Service[]> {
    return this.workshopService.services(workshop.workshopId);
  }

  @Public()
  @ResolveField(() => [JobCategory])
  jobCategories(@Parent() workshop: Workshop): Promise<JobCategory[]> {
    return this.workshopService.jobCategories(workshop.workshopId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'User' })
  @ResolveField(() => User)
  user(@Parent() workshop: Workshop): Promise<User> {
    return this.workshopService.user(workshop.workshopId);
  }

  @Public()
  @ResolveField(() => Address)
  address(@Parent() workshop: Workshop): Promise<Address> {
    return this.workshopService.address(workshop.workshopId);
  }

  @Public()
  @ResolveField(() => [WorkshopJob])
  workshopJobs(@Parent() workshop: Workshop): Promise<WorkshopJob[]> {
    return this.workshopService.workshopJobs(workshop.workshopId);
  }

  @Public()
  @ResolveField(() => [Review])
  reviews(@Parent() workshop: Workshop): Promise<Review[]> {
    return this.workshopService.reviews(workshop.workshopId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'ServiceRequest' })
  @ResolveField(() => [ServiceRequest])
  serviceRequests(@Parent() workshop: Workshop): Promise<ServiceRequest[]> {
    return this.workshopService.serviceRequests(workshop.workshopId);
  }

  @Public()
  @ResolveField(() => WorkshopDetails)
  workshopDetails(@Parent() workshop: Workshop): Promise<WorkshopDetails> {
    return this.workshopService.workshopDetails(workshop.workshopId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Workshop' })
  @ResolveField(() => WorkshopCount)
  async _count(@Parent() workshop: Workshop): Promise<WorkshopCount> {
    return this.workshopService.resolveCount(workshop.workshopId);
  }
}
