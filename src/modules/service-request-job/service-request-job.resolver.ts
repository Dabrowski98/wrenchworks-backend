import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ServiceRequestJob } from './entities/service-request-job.entity';
import { ServiceRequestJobService } from './service-request-job.service';
import { CreateServiceRequestJobInput, UpdateServiceRequestJobInput } from './dto/index';

@Resolver(() => ServiceRequestJob)
export class ServiceRequestJobResolver {
  constructor(private readonly serviceRequestJobService: ServiceRequestJobService) {}

  @Mutation(() => ServiceRequestJob)
  async createServiceRequestJob(@Args('data') data: CreateServiceRequestJobInput) {
    return this.serviceRequestJobService.createServiceRequestJob(data);
  }

  @Mutation(() => ServiceRequestJob)
  async updateServiceRequestJob(@Args('data') data: UpdateServiceRequestJobInput) {
    return this.serviceRequestJobService.updateServiceRequestJob(data);
  }

  @Query(() => [ServiceRequestJob])
  async serviceRequestJobs() {
    return this.serviceRequestJobService.findAllServiceRequestJobs();
  }

  @Query(() => ServiceRequestJob, { nullable: true })
  async serviceRequestJob(
    @Args('serviceRequestId', { type: () => BigInt }) serviceRequestId: bigint,
    @Args('jobId', { type: () => BigInt }) jobId: bigint,
  ) {
    return this.serviceRequestJobService.findServiceRequestJobById(serviceRequestId, jobId);
  }

  @Mutation(() => ServiceRequestJob)
  async deleteServiceRequestJob(
    @Args('serviceRequestId', { type: () => BigInt }) serviceRequestId: bigint,
    @Args('jobId', { type: () => BigInt }) jobId: bigint,
  ) {
    return this.serviceRequestJobService.deleteServiceRequestJob(serviceRequestId, jobId);
  }
}
