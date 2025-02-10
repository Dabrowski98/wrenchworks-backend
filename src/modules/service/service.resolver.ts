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

@UseGuards(UserJwtAuthGuard, AbilitiesGuard)
@Resolver(() => Service)
export class ServiceResolver {
  constructor(private readonly serviceService: ServiceService) {}

  @CheckAbilities({ action: Action.Create, subject: 'Service' })
  @Mutation(() => Service)
  async createService(
    @Args() args: CreateOneServiceArgs,
    @CurrentEmployeeID() employeeId: bigint,
  ): Promise<Service> {
    return this.serviceService.create(args, employeeId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Service' })
  @Query(() => Service)
  async service(@Args() args: FindUniqueServiceArgs): Promise<Service> {
    return this.serviceService.findOne(args);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Service' })
  @Query(() => [Service])
  async services(@Args() args: FindManyServiceArgs): Promise<Service[]> {
    return this.serviceService.findMany(args);
  }

  @CheckAbilities({ action: Action.Update, subject: 'Service' })
  @Mutation(() => Service)
  async updateService(@Args() args: UpdateOneServiceArgs): Promise<Service> {
    return this.serviceService.update(args);
  }

  @CheckAbilities({ action: Action.Update, subject: 'Service' })
  @Mutation(() => Service)
  async changeEmployee(
    @Args('serviceId', { type: () => GraphQLBigInt }) serviceId: bigint,
    @Args('employeeId', { type: () => GraphQLBigInt }) employeeId: bigint,
  ): Promise<Service> {
    return this.serviceService.changeEmployee(serviceId, employeeId);
  }

  @CheckAbilities({ action: Action.Delete, subject: 'Service' })
  @Mutation(() => Boolean)
  async deleteService(@Args() args: DeleteOneServiceArgs): Promise<boolean> {
    return this.serviceService.delete(args);
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
