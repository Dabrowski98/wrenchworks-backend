import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JobService } from './job.service';
import { Job } from './entities/job.entity';
import { CreateJobInput, UpdateJobInput } from './dto/index';

@Resolver(() => Job)
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @Mutation(() => Job)
  async createJob(@Args('data') data: CreateJobInput) {
    return this.jobService.createJob(data);
  }

  @Mutation(() => Job)
  async updateJob(@Args('data') data: UpdateJobInput) {
    return this.jobService.updateJob(data);
  }

  @Query(() => [Job])
  async jobs() {
    return this.jobService.findAllJobs();
  }

  @Query(() => Job, { nullable: true })
  async job(@Args('jobId', { type: () => BigInt }) jobId: bigint) {
    return this.jobService.findJobById(jobId);
  }

  @Mutation(() => Job)
  async deleteJob(@Args('jobId', { type: () => BigInt }) jobId: bigint) {
    return this.jobService.deleteJob(jobId);
  }
}
