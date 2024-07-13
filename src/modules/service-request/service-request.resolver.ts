import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ServiceRequest } from './entities/service-request.entity';
import { ServiceRequestService } from './service-request.service';
import { CreateServiceRequestInput, UpdateServiceRequestInput } from './dto/index';

@Resolver(() => ServiceRequest)
export class ServiceRequestResolver {
  constructor(private readonly serviceRequestService: ServiceRequestService) {}

  @Mutation(() => ServiceRequest)
  async createServiceRequest(@Args('data') data: CreateServiceRequestInput) {
    return this.serviceRequestService.createServiceRequest(data);
  }

  @Mutation(() => ServiceRequest)
  async updateServiceRequest(@Args('data') data: UpdateServiceRequestInput) {
    return this.serviceRequestService.updateServiceRequest(data);
  }

  @Query(() => [ServiceRequest])
  async serviceRequests() {
    return this.serviceRequestService.findAllServiceRequests();
  }

  @Query(() => ServiceRequest, { nullable: true })
  async serviceRequest(@Args('serviceRequestId', { type: () => BigInt }) serviceRequestId: bigint) {
    return this.serviceRequestService.findServiceRequestById(serviceRequestId);
  }

  @Mutation(() => ServiceRequest)
  async deleteServiceRequest(@Args('serviceRequestId', { type: () => BigInt }) serviceRequestId: bigint) {
    return this.serviceRequestService.deleteServiceRequest(serviceRequestId);
  }
}
