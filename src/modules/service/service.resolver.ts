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
  CreateOneServiceArgs,
  DeleteOneServiceArgs,
  FindManyServiceArgs,
  UpdateOneServiceArgs,
  Service,
  ServiceCount,
  FindUniqueServiceArgs,
} from './dto';
import { UseGuards } from '@nestjs/common';
import { ServiceService } from './service.service';
import { Workshop } from '../workshop/dto/workshop.model';
import { Review } from '../review/dto/review.model';
import { Task } from '../task/dto/task.model';
import { ServiceRequest } from '../service-request/dto/service-request.model';
import { Employee } from '../employee/dto/employee.model';
import { Vehicle } from '../vehicle/dto/vehicle.model';
import { Customer } from '../customer/dto/customer.model';
import { CurrentEmployeeID } from 'src/common/decorators/jwt-decorators/current-employee-id.decorator';
import { Action, CheckAbilities } from '../ability';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { JwtUserPayload } from '../auth/user-auth/dto/jwt-user-payload';
import { JwtEmployeePayload } from '../auth/employee-auth/dto/jwt-employee-payload';

@Resolver(() => Service)
export class ServiceResolver {
  constructor(private readonly serviceService: ServiceService) {}

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Create, subject: 'Service' })
  @UseGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Service)
  async createService(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: CreateOneServiceArgs,
  ): Promise<Service> {
    return this.serviceService.create(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Read, subject: 'Service' })
  @UseGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => Service)
  async service(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: FindUniqueServiceArgs,
  ): Promise<Service> {
    return this.serviceService.findOne(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Read, subject: 'Service' })
  @UseGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [Service])
  async services(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args?: FindManyServiceArgs,
  ): Promise<Service[]> {
    return this.serviceService.findMany(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'Service' })
  @UseGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Service)
  async updateService(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: UpdateOneServiceArgs,
  ): Promise<Service> {
    return this.serviceService.update(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'Service' })
  @UseGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Service)
  async changeEmployee(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args('serviceId', { type: () => GraphQLBigInt }) serviceId: bigint,
    @Args('employeeId', { type: () => GraphQLBigInt }) employeeId: bigint,
  ): Promise<Service> {
    return this.serviceService.changeEmployee(currentEntity, serviceId, employeeId);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Delete, subject: 'Service' })
  @UseGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteService(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: DeleteOneServiceArgs,
  ): Promise<boolean> {
    return this.serviceService.delete(currentEntity, args);
  }

  // RESOLVE FIELDS

  @CheckAbilities({ action: Action.Read, subject: 'ServiceRequest' })
  @ResolveField(() => ServiceRequest, { nullable: true })
  async serviceRequest(
    @Parent() service: Service,
  ): Promise<ServiceRequest | null> {
    return this.serviceService.serviceRequest(service.serviceId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Task' })
  @ResolveField(() => [Task], { nullable: true })
  async tasks(@Parent() service: Service): Promise<Task[]> {
    return this.serviceService.tasks(service.serviceId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Customer' })
  @ResolveField(() => Customer, { nullable: true })
  async customer(@Parent() service: Service): Promise<Customer | null> {
    return this.serviceService.customer(service.serviceId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Employee' })
  @ResolveField(() => Employee)
  async employee(@Parent() service: Service): Promise<Employee> {
    return this.serviceService.employee(service.serviceId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Vehicle' })
  @ResolveField(() => Vehicle)
  async vehicle(@Parent() service: Service): Promise<Vehicle> {
    return this.serviceService.vehicle(service.serviceId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Workshop' })
  @ResolveField(() => Workshop)
  async workshop(@Parent() service: Service): Promise<Workshop> {
    return this.serviceService.workshop(service.serviceId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Service' })
  @ResolveField(() => ServiceCount)
  async _count(@Parent() service: Service): Promise<ServiceCount> {
    return this.serviceService.resolveCount(service.serviceId);
  }
}
