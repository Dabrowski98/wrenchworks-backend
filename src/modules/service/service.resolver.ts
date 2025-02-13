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
  DeleteManyServiceArgs,
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
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { CloseOneServiceArgs } from './custom-dto/close-one-service.args';
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';
import { PureAbility } from '@casl/ability';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
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

  // ADMIN, EMPLOYEE, USER
  @CheckAbilities({ action: Action.Read, subject: 'Service' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => Service)
  async service(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: FindUniqueServiceArgs,
  ): Promise<Service> {
    return this.serviceService.findOne(currentEntity, args);
  }

  // ADMIN, EMPLOYEE, USER
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
  @CheckAbilities({ action: Action.Delete, subject: 'Service' })
  @UseGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteService(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: DeleteOneServiceArgs,
  ): Promise<boolean> {
    return this.serviceService.delete(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Resolve, subject: 'Service' })
  @UseGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Service)
  async closeService(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: CloseOneServiceArgs,
  ): Promise<Service> {
    return this.serviceService.close(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Delete, subject: 'Service' })
  @UseGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteManyService(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: DeleteManyServiceArgs,
  ): Promise<boolean> {
    return this.serviceService.deleteMany(currentEntity, args);
  }

  // RESOLVE FIELDS
 
  @ResolveField(() => ServiceRequest, { nullable: true })
  async serviceRequest(
    @CurrentAbility() ability: PureAbility,
    @Parent() service: Service,
  ): Promise<ServiceRequest | null> {
    return this.serviceService.serviceRequest(ability, service.serviceId);
  }
 
  @ResolveField(() => [Task], { nullable: true })
  async tasks(
    @CurrentAbility() ability: PureAbility,
    @Parent() service: Service,
  ): Promise<Task[]> {
    return this.serviceService.tasks(ability, service.serviceId);
  }
 
  @ResolveField(() => Customer, { nullable: true })
  async customer(
    @CurrentAbility() ability: PureAbility,
    @Parent() service: Service,
  ): Promise<Customer | null> {
    return this.serviceService.customer(ability, service.serviceId);
  }
 
  @ResolveField(() => Employee, { nullable: true })
  async employee(
    @CurrentAbility() ability: PureAbility,
    @Parent() service: Service,
  ): Promise<Employee | null> {
    return this.serviceService.employee(ability, service.serviceId);
  }
 
  @ResolveField(() => Vehicle, { nullable: true })
  async vehicle(
    @CurrentAbility() ability: PureAbility,
    @Parent() service: Service,
  ): Promise<Vehicle | null> {
    return this.serviceService.vehicle(ability, service.serviceId);
  }
 
  @ResolveField(() => Workshop, { nullable: true })
  async workshop(
    @CurrentAbility() ability: PureAbility,
    @Parent() service: Service,
  ): Promise<Workshop | null> {
    return this.serviceService.workshop(ability, service.serviceId);
  }
 
  @ResolveField(() => ServiceCount)
  async _count(
    @CurrentAbility() ability: PureAbility,
    @Parent() service: Service,
  ): Promise<ServiceCount> {
    return this.serviceService.resolveCount(ability, service.serviceId);
  }
}
