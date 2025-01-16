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

// @UseGuards(EmployeeJwtAuthGuard)
@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Mutation(() => Customer)
  createCustomer(
    @Args() args: CreateOneCustomerArgs,
  ): Promise<Customer> {
    return this.customerService.create(args);
  }

  @Query(() => Customer)
  customer(@Args() args: FindUniqueCustomerArgs): Promise<Customer> {
    return this.customerService.findOne(args);
  }

  @Query(() => [Customer])
  customers(@Args() args: FindManyCustomerArgs): Promise<Customer[]> {
    return this.customerService.findMany(args);
  }

  @Mutation(() => Customer)
  updateCustomer(
    @Args() args: UpdateOneCustomerArgs,
  ): Promise<Customer> {
    return this.customerService.update(args);
  }

  @Mutation(() => Boolean)
  deleteCustomer(
    @Args() args: DeleteOneCustomerArgs,
  ): Promise<boolean> {
    return this.customerService.delete(args);
  }

  // RESOLVER METHODS

  @ResolveField(() => [Service])
  services(@Parent() customer: Customer): Promise<Service[]> {
    return this.customerService.services(customer.customerId);
  }

  @ResolveField(() => Guest)
  guest(@Parent() customer: Customer): Promise<Guest | null> {
    return this.customerService.guest(customer.customerId);
  }

  @ResolveField(() => User, { nullable: true })
  user(@Parent() customer: Customer): Promise<User | null> {
    return this.customerService.user(customer.customerId);
  }

  @ResolveField(() => [Vehicle], { nullable: true })
  vehicles(@Parent() customer: Customer): Promise<Vehicle[]> {
    return this.customerService.vehicles(customer.customerId);
  }

  @ResolveField(() => Workshop, { nullable: true })
  workshop(@Parent() customer: Customer): Promise<Workshop | null> {
    return this.customerService.workshop(customer.customerId);
  }

  @ResolveField(() => CustomerCount)
  _count(@Parent() customer: Customer): Promise<CustomerCount> {
    return this.customerService.resolveCount(customer.customerId);
  }
}
