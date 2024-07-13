import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AddressService } from './address.service';
import { Address } from './entities/address.entity';
import { CreateAddressInput, UpdateAddressInput } from './dto/index';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Mutation(() => Address)
  async createAddress(@Args('data') data: CreateAddressInput) {
    return this.addressService.createAddress(data);
  }

  @Mutation(() => Address)
  async updateAddress(
    @Args('addressId', { type: () => BigInt }) addressId: bigint,
    @Args('data') data: UpdateAddressInput,
  ) {
    return this.addressService.updateAddress(addressId, data);
  }

  @Mutation(() => Address)
  async deleteAddress(@Args('addressId', { type: () => BigInt }) addressId: bigint) {
    return this.addressService.deleteAddress(addressId);
  }

  @Query(() => [Address])
  async addresses() {
    return this.addressService.findAllAddresses();
  }

  @Query(() => Address, { nullable: true })
  async address(@Args('addressId', { type: () => BigInt }) addressId: bigint) {
    return this.addressService.findAddressById(addressId);
  }
}
