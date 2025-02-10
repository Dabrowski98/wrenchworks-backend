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
  DeleteOneCustomerArgs,
  FindManyCustomerArgs,
  FindUniqueCustomerArgs,
  UpdateOneCustomerArgs,
  Customer,
  CustomerCount,
} from './dto';
import { UseGuards, UsePipes } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Service } from '../service/dto/service.model';
import { Guest } from '../guest/dto/guest.model';
import { User } from '../user/dto/user.model';
import { Vehicle } from '../vehicle/dto/vehicle.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards/employee-jwt-auth.guard';
import { CurrentEmployee } from 'src/common/decorators/jwt-decorators/current-employee.decorator';
import { Employee } from '../employee/dto/employee.model';
import { Action, CheckAbilities } from '../ability';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { JwtEmployeePayload } from '../auth/employee-auth/dto';

@UseGuards(EmployeeJwtAuthGuard, AbilitiesGuard)
@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  // @CheckAbilities({ action: Action.Create, subject: 'Customer' })
  // @Mutation(() => Customer)
  // createCustomer(
  //   @CurrentEmployee() currentEmployee: JwtEmployeePayload,
  //   @Args() args: CreateOneCustomerArgs,
  // ): Promise<Customer> {
  //   return this.customerService.create(args, currentEmployee);
  // }

  // @CheckAbilities({ action: Action.Read, subject: 'Customer' })
  // @Query(() => Customer)
  // customer(
  //   @CurrentEmployee() currentEmployee: JwtEmployeePayload,
  //   @Args() args: FindUniqueCustomerArgs,
  // ): Promise<Customer> {
  //   return this.customerService.findOne(args, currentEmployee);
  // }

  // @CheckAbilities({ action: Action.Read, subject: 'Customer' })
  // @Query(() => [Customer])
  // customers(
  //   @CurrentEmployee() currentEmployee: JwtEmployeePayload,
  //   @Args() args: FindManyCustomerArgs,
  // ): Promise<Customer[]> {
  //   return this.customerService.findMany(args, currentEmployee);
  // }

  // @CheckAbilities({ action: Action.Update, subject: 'Customer' })
  // @Mutation(() => Customer)
  // updateCustomer(
  //   @CurrentEmployee() currentEmployee: JwtEmployeePayload,
  //   @Args() args: UpdateOneCustomerArgs,
  // ): Promise<Customer> {
  //   return this.customerService.update(args, currentEmployee);
  // }

  // @CheckAbilities({ action: Action.Delete, subject: 'Customer' })
  // @Mutation(() => Boolean)
  // deleteCustomer(
  //   @CurrentEmployee() currentEmployee: JwtEmployeePayload,
  //   @Args() args: DeleteOneCustomerArgs,
  // ): Promise<boolean> {
  //   return this.customerService.delete(args, currentEmployee);
  // }

  // RESOLVER METHODS

  @CheckAbilities({ action: Action.Read, subject: 'Service' })
  @ResolveField(() => [Service])
  services(@Parent() customer: Customer): Promise<Service[]> {
    return this.customerService.services(customer.customerId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Guest' })
  @ResolveField(() => Guest)
  guest(@Parent() customer: Customer): Promise<Guest | null> {
    return this.customerService.guest(customer.customerId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'User' })
  @ResolveField(() => User, { nullable: true })
  user(@Parent() customer: Customer): Promise<User | null> {
    return this.customerService.user(customer.customerId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Vehicle' })
  @ResolveField(() => [Vehicle], { nullable: true })
  vehicles(@Parent() customer: Customer): Promise<Vehicle[]> {
    return this.customerService.vehicles(customer.customerId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Workshop' })
  @ResolveField(() => Workshop, { nullable: true })
  workshop(@Parent() customer: Customer): Promise<Workshop | null> {
    return this.customerService.workshop(customer.customerId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Customer' })
  @ResolveField(() => CustomerCount)
  _count(@Parent() customer: Customer): Promise<CustomerCount> {
    return this.customerService.resolveCount(customer.customerId);
  }
}
