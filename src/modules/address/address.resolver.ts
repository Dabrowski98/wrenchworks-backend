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
  CreateOneAddressArgs,
  DeleteOneAddressArgs,
  FindUniqueAddressArgs,
  UpdateOneAddressArgs,
} from 'src/@generated/address';
import { Person } from 'src/@generated/person';
import { DeletePayload } from '../../common/payloads/delete.payload';
import { Workshop } from 'src/@generated/workshop';
import { GraphQLBigInt } from 'graphql-scalars';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Mutation(() => Address)
  createAddress(@Args() args: CreateOneAddressArgs): Promise<Address> {
    return this.addressService.createAddress(args);
  }

  @Mutation(() => Address)
  updateAddress(@Args() args: UpdateOneAddressArgs): Promise<Address> {
    return this.addressService.updateAddress(args);
  }

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
