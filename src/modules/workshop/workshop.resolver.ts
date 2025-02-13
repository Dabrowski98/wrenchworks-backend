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
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';
import { PureAbility } from '@casl/ability';

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

  // ADMIN, USER(OWNER)
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
  @CheckAbilities({ action: Action.Read, subject: 'Workshop' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => Workshop)
  workshop(@Args() args: FindUniqueWorkshopArgs): Promise<Workshop> {
    return this.workshopService.findOne(args);
  }

  // PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'Workshop' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [Workshop])
  workshops(@Args() args?: FindManyWorkshopArgs): Promise<Workshop[]> {
    return this.workshopService.findMany(args);
  }

  //RESOLVE FIELDS

  @ResolveField(() => [Employee], { nullable: true })
  employees(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshop: Workshop,
  ): Promise<Employee[]> {
    return this.workshopService.employees(ability, workshop.workshopId);
  }

  @ResolveField(() => [Customer], { nullable: true })
  customers(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshop: Workshop,
  ): Promise<Customer[] | null> {
    return this.workshopService.customers(ability, workshop.workshopId);
  }

  @ResolveField(() => [Service], { nullable: true })
  services(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshop: Workshop,
  ): Promise<Service[] | null> {
    return this.workshopService.services(ability, workshop.workshopId);
  }

  @Public()
  @ResolveField(() => [JobCategory], { nullable: true })
  jobCategories(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshop: Workshop,
  ): Promise<JobCategory[] | null> {
    return this.workshopService.jobCategories(ability, workshop.workshopId);
  }

  @ResolveField(() => User, { nullable: true })
  user(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshop: Workshop,
  ): Promise<User | null> {
    return this.workshopService.user(ability, workshop.workshopId);
  }

  @Public()
  @ResolveField(() => Address, { nullable: true })
  address(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshop: Workshop,
  ): Promise<Address | null> {
    return this.workshopService.address(ability, workshop.workshopId);
  }

  @Public()
  @ResolveField(() => [WorkshopJob], { nullable: true })
  workshopJobs(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshop: Workshop,
  ): Promise<WorkshopJob[] | null> {
    return this.workshopService.workshopJobs(ability, workshop.workshopId);
  }

  @Public()
  @ResolveField(() => [Review], { nullable: true })
  reviews(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshop: Workshop,
  ): Promise<Review[] | null> {
    return this.workshopService.reviews(ability, workshop.workshopId);
  }

  @ResolveField(() => [ServiceRequest])
  serviceRequests(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshop: Workshop,
  ): Promise<ServiceRequest[] | null> {
    return this.workshopService.serviceRequests(ability, workshop.workshopId);
  }

  @Public()
  @ResolveField(() => WorkshopDetails, { nullable: true })
  workshopDetails(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshop: Workshop,
  ): Promise<WorkshopDetails | null> {
    return this.workshopService.workshopDetails(ability, workshop.workshopId);
  }

  @ResolveField(() => WorkshopCount)
  async _count(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshop: Workshop,
  ): Promise<WorkshopCount> {
    return this.workshopService.resolveCount(ability, workshop.workshopId);
  }
}
