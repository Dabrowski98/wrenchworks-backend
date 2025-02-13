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
  CreateOneCustomerArgs,
  FindManyCustomerArgs,
  FindUniqueCustomerArgs,
  UpdateOneCustomerArgs,
  Customer,
  CustomerCount,
} from './dto';
import { UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Service } from '../service/dto/service.model';
import { Guest } from '../guest/dto/guest.model';
import { User } from '../user/dto/user.model';
import { Vehicle } from '../vehicle/dto/vehicle.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { Action, CheckAbilities } from '../ability';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards/employee-jwt-auth.guard';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Create, subject: 'Customer' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Customer)
  createCustomer(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: CreateOneCustomerArgs,
  ): Promise<Customer> {
    return this.customerService.create(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  // @CheckAbilities({ action: Action.Read, subject: 'Customer' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => Customer)
  customer(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: FindUniqueCustomerArgs,
  ): Promise<Customer> {
    return this.customerService.findOne(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Read, subject: 'Customer' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [Customer])
  customers(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args?: FindManyCustomerArgs,
  ): Promise<Customer[]> {
    return this.customerService.findMany(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'Customer' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Customer)
  updateCustomer(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: UpdateOneCustomerArgs,
  ): Promise<Customer> {
    return this.customerService.update(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Delete, subject: 'Customer' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  deleteCustomer(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args('customerId', { type: () => GraphQLBigInt })
    customerId: bigint,
  ): Promise<boolean> {
    return this.customerService.delete(currentEntity, customerId);
  }

  // RESOLVER METHODS

  @CheckAbilities({ action: Action.Read, subject: 'Service' })
  @ResolveField(() => [Service])
  async services(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Parent() customer: Customer,
  ): Promise<Service[]> {
    return this.customerService.services(currentEntity, customer.customerId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Guest' })
  @ResolveField(() => Guest)
  async guest(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Parent() customer: Customer,
  ): Promise<Guest | null> {
    return this.customerService.guest(currentEntity, customer.customerId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'User' })
  @ResolveField(() => User, { nullable: true })
  user(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Parent() customer: Customer,
  ): Promise<User | null> {
    return this.customerService.user(currentEntity, customer.customerId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Vehicle' })
  @ResolveField(() => [Vehicle], { nullable: true })
  vehicles(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Parent() customer: Customer,
  ): Promise<Vehicle[]> {
    return this.customerService.vehicles(currentEntity, customer.customerId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Workshop' })
  @ResolveField(() => Workshop, { nullable: true })
  workshop(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Parent() customer: Customer,
  ): Promise<Workshop | null> {
    return this.customerService.workshop(currentEntity, customer.customerId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Customer' })
  @ResolveField(() => CustomerCount)
  _count(@Parent() customer: Customer): Promise<CustomerCount> {
    return this.customerService.resolveCount(customer.customerId);
  }
}
