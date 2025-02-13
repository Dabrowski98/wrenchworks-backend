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
  DeleteManyCustomerArgs,
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
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';
import { PureAbility } from '@casl/ability';

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
  @CheckAbilities({ action: Action.Read, subject: 'Customer' })
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

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Delete, subject: 'Customer' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteManyCustomer(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: DeleteManyCustomerArgs,
  ): Promise<boolean> {
    return this.customerService.deleteMany(currentEntity, args);
  }

  // RESOLVER METHODS

  @ResolveField(() => [Service], { nullable: true })
  services(
    @CurrentAbility() ability: PureAbility,
    @Parent() customer: Customer,
  ): Promise<Service[]> {
    return this.customerService.services(ability, customer.customerId);
  }

  @ResolveField(() => Guest, { nullable: true })
  guest(
    @CurrentAbility() ability: PureAbility,
    @Parent() customer: Customer,
  ): Promise<Guest | null> {
    return this.customerService.guest(ability, customer.customerId);
  }

  @ResolveField(() => User, { nullable: true })
  user(
    @CurrentAbility() ability: PureAbility,
    @Parent() customer: Customer,
  ): Promise<User | null> {
    return this.customerService.user(ability, customer.customerId);
  }

  @ResolveField(() => [Vehicle], { nullable: true })
  vehicles(
    @CurrentAbility() ability: PureAbility,
    @Parent() customer: Customer,
  ): Promise<Vehicle[]> {
    return this.customerService.vehicles(ability, customer.customerId);
  }

  @ResolveField(() => Workshop, { nullable: true })
  workshop(
    @CurrentAbility() ability: PureAbility,
    @Parent() customer: Customer,
  ): Promise<Workshop | null> {
    return this.customerService.workshop(ability, customer.customerId);
  }

  @ResolveField(() => CustomerCount, { nullable: true })
  _count(
    @CurrentAbility() ability: PureAbility,
    @Parent() customer: Customer,
  ): Promise<CustomerCount> {
    return this.customerService.resolveCount(ability, customer.customerId);
  }
}
