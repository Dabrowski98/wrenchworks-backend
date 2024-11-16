import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { AddressService } from './address.service';
import {
  Address,
  AddressCount,
  AddressCreateInput,
  AddressUpdateInput,
  AddressWhereUniqueInput,
  CreateOneAddressArgs,
  UpdateOneAddressArgs,
} from './dto';
import { GraphQLBigInt } from 'graphql-scalars';
import { DeletePayload } from 'src/common/payloads/delete.payload';
import { Person } from '../person/dto';
import { Workshop } from '../workshop';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Mutation(() => Address)
  createAddress(
    @Args('data', { type: () => AddressCreateInput }) data: AddressCreateInput,
  ): Promise<Address> {
    return this.addressService.createAddress({
      data,
    });
  }

  // @Mutation(() => Address)
  // async updateAddress(
  //   @Args('data') data: AddressUpdateInput,
  //   @Args('where') where: AddressWhereUniqueInput,
  // ) {
  //   if (!where?.addressId) {
  //     throw new Error(
  //       `Address ID is required for update. Received: ${JSON.stringify(where)}`,
  //     );
  //   }

  //   return this.addressService.updateAddress(data, where);
  // }

  @Query(() => [Address])
  addresses(): Promise<Address[]> {
    return this.addressService.findAllAddresses();
  }

  @Query(() => Address)
  address(
    @Args('addressId', { type: () => GraphQLBigInt }) addressId,
  ): Promise<Address> {
    return this.addressService.findAddressById(addressId);
  }

  @Mutation(() => DeletePayload)
  deleteAddress(
    @Args('addressId', { type: () => GraphQLBigInt }) addressId,
  ): Promise<DeletePayload> {
    return this.addressService.deleteAddress(addressId);
  }

  //RESOLVE FIELDS

  @ResolveField(() => [Person])
  persons(@Parent() address: Address): Promise<Person[]> {
    return this.addressService.persons(address.addressId);
  }

  @ResolveField(() => [Workshop])
  workshops(@Parent() address: Address): Promise<Workshop[]> {
    return this.addressService.workshops(address.addressId);
  }

  @ResolveField(() => AddressCount)
  async _count(@Parent() address: Address): Promise<AddressCount> {
    return this.addressService.resolveCount(address);
  }
}
