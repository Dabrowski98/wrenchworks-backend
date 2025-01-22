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

@Resolver(() => Service)
export class ServiceResolver {
  constructor(private readonly serviceService: ServiceService) {}

  @Mutation(() => Service)
  async createService(
    @Args() args: CreateOneServiceArgs,
    @CurrentEmployeeID() employeeId: bigint,
  ): Promise<Service> {
    return this.serviceService.create(args, employeeId);
  }

  @Query(() => Service)
  async service(@Args() args: FindUniqueServiceArgs): Promise<Service> {
    return this.serviceService.findOne(args);
  }

  @Query(() => [Service])
  async services(@Args() args: FindManyServiceArgs): Promise<Service[]> {
    return this.serviceService.findMany(args);
  }

  @Mutation(() => Service)
  async updateService(@Args() args: UpdateOneServiceArgs): Promise<Service> {
    return this.serviceService.update(args);
  }

  @Mutation(() => Service)
  async changeEmployee(
    @Args('serviceId', { type: () => GraphQLBigInt }) serviceId: bigint,
    @Args('employeeId', { type: () => GraphQLBigInt }) employeeId: bigint,
  ): Promise<Service> {
    return this.serviceService.changeEmployee(serviceId, employeeId);
  }

  @Mutation(() => Boolean)
  async deleteService(@Args() args: DeleteOneServiceArgs): Promise<boolean> {
    return this.serviceService.delete(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => ServiceRequest, { nullable: true })
  async serviceRequest(
    @Parent() service: Service,
  ): Promise<ServiceRequest | null> {
    return this.serviceService.serviceRequest(service.serviceId);
  }

  @ResolveField(() => [Task], { nullable: true })
  async tasks(@Parent() service: Service): Promise<Task[]> {
    return this.serviceService.tasks(service.serviceId);
  }

  @ResolveField(() => Customer, { nullable: true })
  async customer(@Parent() service: Service): Promise<Customer | null> {
    return this.serviceService.customer(service.serviceId);
  }

  @ResolveField(() => Employee, { nullable: true })
  async employee(@Parent() service: Service): Promise<Employee | null> {
    return this.serviceService.employee(service.serviceId);
  }

  @ResolveField(() => Vehicle, { nullable: true })
  async vehicle(@Parent() service: Service): Promise<Vehicle | null> {
    return this.serviceService.vehicle(service.serviceId);
  }

  @ResolveField(() => Workshop, { nullable: true })
  async workshop(@Parent() service: Service): Promise<Workshop | null> {
    return this.serviceService.workshop(service.serviceId);
  }

  @ResolveField(() => ServiceCount)
  async _count(@Parent() service: Service): Promise<ServiceCount> {
    return this.serviceService.resolveCount(service.serviceId);
  }
}
