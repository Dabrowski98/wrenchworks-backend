import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Service } from './entities/service.entity';
import { ServiceService } from './service.service';
import { CreateServiceInput, UpdateServiceInput } from './dto/index';

@Resolver(() => Service)
export class ServiceResolver {
  constructor(private readonly serviceService: ServiceService) {}

  @Mutation(() => Service)
  async createService(@Args('data') data: CreateServiceInput) {
    return this.serviceService.createService(data);
  }

  @Mutation(() => Service)
  async updateService(@Args('data') data: UpdateServiceInput) {
    return this.serviceService.updateService(data);
  }

  @Query(() => [Service])
  async services() {
    return this.serviceService.findAllServices();
  }

  @Query(() => Service, { nullable: true })
  async service(@Args('serviceId', { type: () => BigInt }) serviceId: bigint) {
    return this.serviceService.findServiceById(serviceId);
  }

  @Mutation(() => Service)
  async deleteService(@Args('serviceId', { type: () => BigInt }) serviceId: bigint) {
    return this.serviceService.deleteService(serviceId);
  }
}
