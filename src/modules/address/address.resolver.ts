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
  CreateOneAddressArgs,
  DeleteOneAddressArgs,
  FindUniqueAddressArgs,
  UpdateOneAddressArgs,
} from 'src/@generated/address';
import { AddressPerson } from 'src/@generated/address-person';
import { AddressWorkshop } from 'src/@generated/address-workshop';
import { DeletePayload } from '../../common/payloads/delete.payload';

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

  @Mutation(() => DeletePayload)
  deleteAddress(@Args() args: DeleteOneAddressArgs): Promise<DeletePayload> {
    return this.addressService.deleteAddress(args);
  }

  @Query(() => [Address])
  addresses(): Promise<Address[]> {
    return this.addressService.findAllAddresses();
  }

  @Query(() => Address)
  address(@Args() args: FindUniqueAddressArgs): Promise<Address> {
    return this.addressService.findAddressById(args);
  }

  @ResolveField(() => [AddressPerson])
  addressPersons(@Parent() address: Address): Promise<AddressPerson[]> {
    return this.addressService.resolveAddressPersons(address.addressId);
  }

  @ResolveField(() => [AddressWorkshop])
  addressWorkshops(@Parent() address: Address): Promise<AddressWorkshop[]> {
    return this.addressService.resolveAddressWorkshops(address.addressId);
  }
}
