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
} from './dto';
import { GraphQLBigInt } from 'graphql-scalars';
import { Person } from '../person/dto';
import { WorkshopDetails } from '../workshop-details/dto';
import { Address } from '../address/dto';
import { WorkshopJob } from '../workshop-job/dto';
import { Review } from '../review/dto';
import { ServiceRequest } from '../service-request/dto';
import { DeletePayload } from 'src/common/payloads/delete.payload';
import { NoDataProvidedForUpdate } from 'src/common/custom-errors/errors.config';
import { JobCategory } from '../job-category';
import { Service } from '../service';
import { Customer } from '../customer';
import { Employee } from '../employee';
import { PermissionSet } from '../permission-set';

@Resolver(() => Workshop)
export class WorkshopResolver {
  constructor(private readonly workshopService: WorkshopService) {}

  @Mutation(() => Workshop)
  createWorkshop(@Args() args: CreateOneWorkshopArgs): Promise<Workshop> {
    return this.workshopService.createWorkshop(args);
  }

  @Mutation(() => Workshop)
  updateWorkshop(@Args() args: UpdateOneWorkshopArgs): Promise<Workshop> {
    if (Object.keys(args.data).length === 0) {
      throw new NoDataProvidedForUpdate(Workshop);
    }

    return this.workshopService.updateWorkshop(args);
  }

  @Mutation(() => DeletePayload)
  deleteWorkshop(
    @Args('workshopId', { type: () => GraphQLBigInt }) workshopId: bigint,
  ): Promise<DeletePayload> {
    return this.workshopService.deleteWorkshop(workshopId);
  }

  @Query(() => Workshop)
  workshop(
    @Args('workshopId', { type: () => GraphQLBigInt }) workshopId: bigint,
  ): Promise<Workshop> {
    return this.workshopService.findWorkshopById(workshopId);
  }

  @Query(() => [Workshop])
  workshops(@Args() args: FindManyWorkshopArgs): Promise<Workshop[]> {
    return this.workshopService.findAllWorkshops(args);
  }

  //RESOLVE FIELDS

  @ResolveField(() => [PermissionSet])
  permissionSets(@Parent() workshop: Workshop): Promise<PermissionSet[]> {
    return this.workshopService.permissionSets(workshop.workshopId);
  }

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

  @ResolveField(() => Person)
  person(@Parent() workshop: Workshop): Promise<Person> {
    return this.workshopService.person(workshop.workshopId);
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