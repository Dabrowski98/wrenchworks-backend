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
  DeleteManyServiceRequestArgs,
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
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { IpAddress } from 'src/common/decorators/headers-decorators/ip-address.decorator';
import { CreateServiceRequestAsGuestArgs } from './custom-dto/create-service-request-as-guest.args';
import { AcceptServiceRequestArgs } from './custom-dto/accept-service-request.args';
@Resolver(() => ServiceRequest)
export class ServiceRequestResolver {
  constructor(private readonly serviceRequestService: ServiceRequestService) {}

  // ADMIN, USER
  @CheckAbilities({ action: Action.Create, subject: 'ServiceRequest' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => ServiceRequest)
  async createServiceRequestAsUser(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: CreateOneServiceRequestArgs,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.createAsUser(currentUser, args);
  }

  // PUBLIC
  @Public()
  @Mutation(() => ServiceRequest)
  async createServiceRequestAsGuest(
    @Args() args: CreateServiceRequestAsGuestArgs,
    @IpAddress() ipAddress: string,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.createAsGuest(args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Resolve, subject: 'ServiceRequest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => ServiceRequest)
  async acceptServiceRequest(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: AcceptServiceRequestArgs,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.accept(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Resolve, subject: 'ServiceRequest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => ServiceRequest)
  async rejectServiceRequest(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args('serviceRequestId', { type: () => GraphQLBigInt })
    serviceRequestId: bigint,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.reject(currentEntity, serviceRequestId);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Resolve, subject: 'ServiceRequest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [ServiceRequest])
  async cancelServiceRequest(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args('serviceRequestId', { type: () => GraphQLBigInt })
    serviceRequestId: bigint,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.cancel(currentEntity, serviceRequestId);
  }

  // ADMIN, EMPLOYEE, USER
  @CheckAbilities({ action: Action.Read, subject: 'ServiceRequest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => ServiceRequest)
  async serviceRequest(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: FindUniqueServiceRequestArgs,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.findOne(currentEntity, args);
  }

  // ADMIN, EMPLOYEE, USER
  @CheckAbilities({ action: Action.Read, subject: 'ServiceRequest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [ServiceRequest])
  async serviceRequests(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: FindManyServiceRequestArgs,
  ): Promise<ServiceRequest[]> {
    return this.serviceRequestService.findMany(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'ServiceRequest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => ServiceRequest)
  async updateServiceRequest(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: UpdateOneServiceRequestArgs,
  ): Promise<ServiceRequest> {
    return this.serviceRequestService.update(currentEntity, args);
  }

  // ADMIN, EMPLOYEE, USER
  @CheckAbilities({ action: Action.Delete, subject: 'ServiceRequest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteServiceRequest(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: DeleteOneServiceRequestArgs,
  ): Promise<boolean> {
    return this.serviceRequestService.delete(currentEntity, args);
  }

  @CheckAbilities({ action: Action.Delete, subject: 'ServiceRequest' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteManyServiceRequest(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: DeleteManyServiceRequestArgs,
  ): Promise<boolean> {
    return this.serviceRequestService.deleteMany(currentEntity, args);
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
