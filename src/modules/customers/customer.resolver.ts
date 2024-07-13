import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Customer } from './entities/customer.entity';
import { CustomerService } from './customer.service';
import { CreateCustomerInput, UpdateCustomerInput } from './dto/index';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Mutation(() => Customer)
  async createCustomer(@Args('data') data: CreateCustomerInput) {
    return this.customerService.createCustomer(data);
  }

  // @Mutation(() => Customer)
  // async deleteCustomer(@Args('id', { type: () => BigInt }) id: bigint) {
  //   return this.customerService.deleteCustomer(id);
  // }

  // @Mutation(() => Customer)
  // async retrieveCustomer(@Args('id', { type: () => BigInt }) id: bigint) {
  //   return this.customerService.retrieveCustomer(id);
  // }

  // @Mutation(() => Customer)
  // async destroyCustomer(@Args('id', { type: () => BigInt }) id: bigint) {
  //   return this.customerService.destroyCustomer(id);
  // }

  // @Mutation(() => Customer)
  // async updateCustomer(
  //   @Args('id', { type: () => BigInt }) id: bigint,
  //   @Args('data') data: UpdateCustomerInput,
  // ) {
  //   return this.customerService.updateCustomer(id, data);
  // }

  @Query(() => [Customer])
  async customers() {
    return this.customerService.findCustomers();
  }

  @Query(() => Customer, { nullable: true })
  async customer(
    @Args('customerId', { type: () => BigInt }) customerId: bigint,
    @Args('workshopId', { type: () => BigInt }) workshopId: bigint,
  ) {
    return this.customerService.findCustomerById(customerId, workshopId);
  }
}
