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
  CreateOneServiceRequestArgs,
  DeleteOneServiceRequestArgs,
  FindManyServiceRequestArgs,
  FindUniqueServiceRequestArgs,
  UpdateOneServiceRequestArgs,
  ServiceRequest,
  ServiceRequestCount,
} from './dto';
import { UseGuards } from '@nestjs/common';
import { CurrentEmployeeID } from 'src/common/decorators/jwt-decorators/current-employee-id.decorator';
import { ServiceRequestService } from './service-request.service';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { CreateServiceRequestAsGuestInput } from './custom-dto/create-service-request-as-guest.input';

@Resolver(() => ServiceRequest)
export class ServiceRequestResolver {
  constructor(private readonly serviceRequestService: ServiceRequestService) {}

  @Mutation(() => ServiceRequest)
  async createServiceRequestAsUser(
    @Args() args: CreateOneServiceRequestArgs,
    @CurrentUserID() userId: bigint,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.createAsUser(args, userId);
  }

  @Mutation(() => ServiceRequest)
  async createServiceRequestAsGuest(
    @Args() args: CreateServiceRequestAsGuestInput,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.createAsGuest(args);
  }

  @Mutation(() => ServiceRequest)
  async acceptServiceRequest(
    @Args('serviceRequestId', { type: () => GraphQLBigInt })
    serviceRequestId: bigint,
    @CurrentEmployeeID() employeeId: bigint,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.accept(serviceRequestId, employeeId);
  }

  @Mutation(() => ServiceRequest)
  async rejectServiceRequest(
    @Args('serviceRequestId', { type: () => GraphQLBigInt })
    serviceRequestId: bigint,
    @CurrentEmployeeID() employeeId: bigint,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.reject(serviceRequestId, employeeId);
  }

  @Query(() => ServiceRequest)
  async serviceRequest(
    @Args() args: FindUniqueServiceRequestArgs,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.findOne(args);
  }

  @Query(() => [ServiceRequest])
  async serviceRequests(
    @Args() args: FindManyServiceRequestArgs,
  ): Promise<ServiceRequest[]> {
    return this.serviceRequestService.findMany(args);
  }

  @Mutation(() => ServiceRequest)
  async updateServiceRequest(
    @Args() args: UpdateOneServiceRequestArgs,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.update(args);
  }

  @Mutation(() => Boolean)
  async deleteServiceRequest(
    @Args() args: DeleteOneServiceRequestArgs,
  ): Promise<boolean> {
    return this.serviceRequestService.delete(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => Employee, { nullable: true })
  async employee(
    @Parent() serviceRequest: ServiceRequest,
  ): Promise<Employee | null> {
    return this.serviceRequestService.employee(serviceRequest.serviceRequestId);
  }

  @ResolveField(() => Service, { nullable: true })
  async service(
    @Parent() serviceRequest: ServiceRequest,
  ): Promise<Service | null> {
    return this.serviceRequestService.service(serviceRequest.serviceId);
  }

  @ResolveField(() => ServiceRequestCount)
  async _count(
    @Parent() serviceRequest: ServiceRequest,
  ): Promise<ServiceRequestCount> {
    return this.serviceRequestService.resolveCount(
      serviceRequest.serviceRequestId,
    );
  }
}
