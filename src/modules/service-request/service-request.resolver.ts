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
import {
  CreateOneServiceArgs,
  Service,
  ServiceCreateInput,
} from '../service/dto';
import { AcceptServiceRequestInput } from './custom-dto/accept-service-request.input';
import { Job } from '../job/dto/job.model';
import { Vehicle } from '../vehicle/dto/vehicle.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { User } from '../user/dto/user.model';
import { Guest } from '../guest/dto/guest.model';
import { Action, CheckAbilities } from '../ability';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards';

@Resolver(() => ServiceRequest)
export class ServiceRequestResolver {
  constructor(private readonly serviceRequestService: ServiceRequestService) {}

  @UseGuards(UserJwtAuthGuard, AbilitiesGuard)
  @CheckAbilities({ action: Action.Create, subject: 'ServiceRequest' })
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

  @UseGuards(EmployeeJwtAuthGuard, AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: 'ServiceRequest' })
  @Mutation(() => ServiceRequest)
  async acceptServiceRequest(
    @Args() args: AcceptServiceRequestInput,
    @CurrentEmployeeID() employeeId: bigint,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.accept(args, employeeId);
  }

  @UseGuards(EmployeeJwtAuthGuard, AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: 'ServiceRequest' })
  @Mutation(() => ServiceRequest)
  async rejectServiceRequest(
    @Args('serviceRequestId', { type: () => GraphQLBigInt })
    serviceRequestId: bigint,
    @CurrentEmployeeID() employeeId: bigint,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.reject(serviceRequestId, employeeId);
  }

  @UseGuards(EmployeeJwtAuthGuard, AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: 'ServiceRequest' })
  @Query(() => ServiceRequest)
  async serviceRequest(
    @Args() args: FindUniqueServiceRequestArgs,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.findOne(args);
  }

  @UseGuards(EmployeeJwtAuthGuard, AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: 'ServiceRequest' })
  @Query(() => [ServiceRequest])
  async serviceRequests(
    @Args() args: FindManyServiceRequestArgs,
  ): Promise<ServiceRequest[]> {
    return this.serviceRequestService.findMany(args);
  }

  @UseGuards(EmployeeJwtAuthGuard, AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: 'ServiceRequest' })
  @Mutation(() => ServiceRequest)
  async updateServiceRequest(
    @Args() args: UpdateOneServiceRequestArgs,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.update(args);
  }

  @UseGuards(EmployeeJwtAuthGuard, AbilitiesGuard)
  @CheckAbilities({ action: Action.Delete, subject: 'ServiceRequest' })
  @Mutation(() => Boolean)
  async deleteServiceRequest(
    @Args() args: DeleteOneServiceRequestArgs,
  ): Promise<boolean> {
    return this.serviceRequestService.delete(args);
  }


  // RESOLVE FIELDS

  @CheckAbilities({ action: Action.Read, subject: 'Job' })
  @ResolveField(() => [Job])
  async jobs(@Parent() serviceRequest: ServiceRequest): Promise<Job[]> {
    return this.serviceRequestService.jobs(serviceRequest.serviceRequestId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Service' })
  @ResolveField(() => Service)
  async approvedService(
    @Parent() serviceRequest: ServiceRequest,
  ): Promise<Service> {
    return this.serviceRequestService.approvedService(
      serviceRequest.serviceRequestId,
    );
  }

  @CheckAbilities({ action: Action.Read, subject: 'Vehicle' })
  @ResolveField(() => Vehicle)
  async vehicle(@Parent() serviceRequest: ServiceRequest): Promise<Vehicle> {
    return this.serviceRequestService.vehicle(serviceRequest.serviceRequestId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Workshop' })
  @ResolveField(() => Workshop)
  async workshop(@Parent() serviceRequest: ServiceRequest): Promise<Workshop> {
    return this.serviceRequestService.workshop(serviceRequest.serviceRequestId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'User' })
  @ResolveField(() => User)
  async user(@Parent() serviceRequest: ServiceRequest): Promise<User> {
    return this.serviceRequestService.user(serviceRequest.serviceRequestId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Guest' })
  @ResolveField(() => Guest)
  async guest(@Parent() serviceRequest: ServiceRequest): Promise<Guest> {
    return this.serviceRequestService.guest(serviceRequest.serviceRequestId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'ServiceRequest' })
  @ResolveField(() => ServiceRequestCount)
  async _count(
    @Parent() serviceRequest: ServiceRequest,
  ): Promise<ServiceRequestCount> {
    return this.serviceRequestService.resolveCount(
      serviceRequest.serviceRequestId,
    );
  }
}
