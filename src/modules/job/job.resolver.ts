import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import {
  CreateOneJobArgs,
  DeleteOneJobArgs,
  FindManyJobArgs,
  FindUniqueJobArgs,
  UpdateOneJobArgs,
  Job,
  JobCount,
} from './dto';
import { UseGuards } from '@nestjs/common';
import { JobService } from './job.service';
import { JobCategory } from '../job-category/dto/job-category.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { ServiceRequest } from '../service-request/dto/service-request.model';
import { WorkshopJob } from '../workshop-job/dto/workshop-job.model';
import { Action, CheckAbilities } from '../ability';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';

@UseGuards(UserJwtAuthGuard, AbilitiesGuard)
@Resolver(() => Job)
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @CheckAbilities({ action: Action.Read, subject: 'Job' })
  @Query(() => Job)
  job(@Args() args: FindUniqueJobArgs): Promise<Job> {
    return this.jobService.findOne(args);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Job' })
  @Query(() => [Job])
  jobs(@Args() args: FindManyJobArgs): Promise<Job[]> {
    return this.jobService.findMany(args);
  }

  @CheckAbilities({ action: Action.Create, subject: 'Job' })
  @Mutation(() => Job)
  createJob(@Args() args: CreateOneJobArgs): Promise<Job> {
    return this.jobService.create(args);
  }

  @CheckAbilities({ action: Action.Update, subject: 'Job' })
  @Mutation(() => Job)
  updateJob(@Args() args: UpdateOneJobArgs): Promise<Job> {
    return this.jobService.update(args);
  }

  @CheckAbilities({ action: Action.Delete, subject: 'Job' })
  @Mutation(() => Boolean)
  deleteJob(@Args() args: DeleteOneJobArgs): Promise<boolean> {
    return this.jobService.delete(args);
  }

  // RESOLVE FIELDS

  @CheckAbilities({ action: Action.Read, subject: 'JobCategory' })
  @ResolveField(() => JobCategory, { nullable: true })
  jobCategory(@Parent() job: Job): Promise<JobCategory | null> {
    return this.jobService.jobCategory(job.jobId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Service' })
  @ResolveField(() => [ServiceRequest], { nullable: true })
  serviceRequests(@Parent() job: Job): Promise<ServiceRequest[]> {
    return this.jobService.serviceRequests(job.jobId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Workshop' })
  @ResolveField(() => [WorkshopJob], { nullable: true })
  jobWorkshops(@Parent() job: Job): Promise<WorkshopJob[]> {
    return this.jobService.jobWorkshops(job.jobId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Job' })
  @ResolveField(() => JobCount)
  _count(@Parent() job: Job): Promise<JobCount> {
    return this.jobService.resolveCount(job.jobId);
  }

}
