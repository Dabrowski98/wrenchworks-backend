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

//TODO: Moderator and above.

@Resolver(() => Job)
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @Mutation(() => Job)
  async createJob(@Args() args: CreateOneJobArgs): Promise<Job> {
    return this.jobService.create(args);
  }

  @Query(() => Job)
  async job(
    @Args('jobId', { type: () => GraphQLBigInt }) jobId: bigint,
  ): Promise<Job> {
    return this.jobService.findOne({ where: { jobId } });
  }

  @Query(() => [Job])
  async jobs(@Args() args: FindManyJobArgs): Promise<Job[]> {
    return this.jobService.findMany(args);
  }

  @Mutation(() => Job)
  async updateJob(@Args() args: UpdateOneJobArgs): Promise<Job> {
    return this.jobService.update(args);
  }

  @Mutation(() => Boolean)
  async deleteJob(@Args() args: DeleteOneJobArgs): Promise<boolean> {
    return this.jobService.delete(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => JobCategory, { nullable: true })
  jobCategory(@Parent() job: Job): Promise<JobCategory | null> {
    return this.jobService.jobCategory(job.jobId);
  }

  @ResolveField(() => [ServiceRequest], { nullable: true })
  serviceRequests(@Parent() job: Job): Promise<ServiceRequest[]> {
    return this.jobService.serviceRequests(job.jobId);
  }

  @ResolveField(() => [WorkshopJob], { nullable: true })
  jobWorkshops(@Parent() job: Job): Promise<WorkshopJob[]> {
    return this.jobService.jobWorkshops(job.jobId);
  }

  @ResolveField(() => JobCount)
  async _count(@Parent() job: Job): Promise<JobCount> {
    return this.jobService.resolveCount(job.jobId);
  }
} 