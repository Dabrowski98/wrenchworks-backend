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
import { Person } from 'src/@generated/person';
import { DeletePayload } from '../../common/payloads/delete.payload';
import { Workshop } from 'src/@generated/workshop'  ;

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

  //RESOLVE FIELDS

  @ResolveField(() => [Person])
  persons(@Parent() address: Address): Promise<Person[]> {
    return this.addressService.resolvePersons(address.addressId);
  }

  @ResolveField(() => [Workshop])
  workshops(@Parent() address: Address): Promise<Workshop[]> {
    return this.addressService.resolveWorkshops(address.addressId);
  }
}
