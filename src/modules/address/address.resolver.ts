import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { AddressService } from './address.service';
import { DeletePayload } from '../../common/payloads/delete.payload';
import { GraphQLBigInt } from 'graphql-scalars';
import { Address } from './dto/generated/address.model';
import { PersonCount } from '../person/dto/generated/person-count.output';
import { Workshop } from '../workshop/dto/generated/workshop.model';
import { AddressCount } from './dto/generated/address-count.output';
import { Person } from '../person/dto/generated/person.model';
import { CreateOneAddressArgs } from './dto/create-one-address.args';
import { UpdateOneAddressArgs } from './dto/update-one-address.args';
import { DeleteOneAddressArgs } from './dto/delete-one-address.args';

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
    @Args() args: DeleteOneAddressArgs): Promise<DeletePayload> {
    return this.addressService.deleteAddress(args);
  }

  //RESOLVE FIELDS

  @ResolveField(() => [PersonCount])
  persons(@Parent() address: Address): Promise<Person[]> {
    return this.addressService.persons(address.addressId);
  }

  @ResolveField(() => Workshop)
  workshop(@Parent() address: Address): Promise<Workshop> {
    return this.addressService.workshop(address.addressId);
  }

  @ResolveField(() => AddressCount)
  async _count(@Parent() address: Address): Promise<AddressCount> {
    return this.addressService.resolveCount(address);
  }
}
