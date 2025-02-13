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
  DeleteManyJobArgs,
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
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';
import { PureAbility } from '@casl/ability';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';

@Resolver(() => Job)
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  // ADMIN
  @CheckAbilities({ action: Action.Create, subject: 'Job' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Job)
  createJob(@Args() args: CreateOneJobArgs): Promise<Job> {
    return this.jobService.create(args);
  }

  // PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'Job' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => Job)
  job(@Args() args: FindUniqueJobArgs): Promise<Job> {
    return this.jobService.findOne(args);
  }

  // PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'Job' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [Job])
  jobs(@Args() args?: FindManyJobArgs): Promise<Job[]> {
    return this.jobService.findMany(args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Update, subject: 'Job' })
  @UseGuards(UserJwtAuthGuard, AbilitiesGuard)
  @Mutation(() => Job)
  updateJob(@Args() args: UpdateOneJobArgs): Promise<Job> {
    return this.jobService.update(args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Delete, subject: 'Job' })
  @UseGuards(UserJwtAuthGuard, AbilitiesGuard)
  @Mutation(() => Boolean)
  deleteJob(@Args() args: DeleteOneJobArgs): Promise<boolean> {
    return this.jobService.delete(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => JobCategory, { nullable: true })
  jobCategory(
    @CurrentAbility() ability: PureAbility,
    @Parent() job: Job,
  ): Promise<JobCategory | null> {
    return this.jobService.jobCategory(ability, job.jobId);
  }

  @ResolveField(() => [ServiceRequest], { nullable: true })
  serviceRequests(
    @CurrentAbility() ability: PureAbility,
    @Parent() job: Job,
  ): Promise<ServiceRequest[]> {
    return this.jobService.serviceRequests(ability, job.jobId);
  }

  @ResolveField(() => [WorkshopJob], { nullable: true })
  workshopJobs(
    @CurrentAbility() ability: PureAbility,
    @Parent() job: Job,
  ): Promise<WorkshopJob[]> {
    return this.jobService.workshopJobs(ability, job.jobId);
  }

  @ResolveField(() => JobCount, { nullable: true })
  _count(
    @CurrentAbility() ability: PureAbility,
    @Parent() job: Job,
  ): Promise<JobCount> {
    return this.jobService.resolveCount(ability, job.jobId);
  }
}
