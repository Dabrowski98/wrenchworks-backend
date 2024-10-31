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
  async createAddress(@Args() args: CreateOneAddressArgs) {
    return this.addressService.createAddress(args);
  }

  @Mutation(() => Address)
  async updateAddress(@Args() args: UpdateOneAddressArgs) {
    return this.addressService.updateAddress(args);
  }

  @Mutation(() => DeletePayload)
  async deleteAddress(@Args() args: DeleteOneAddressArgs) {
    return this.addressService.deleteAddress(args);
  }

  @Query(() => [Address])
  async addresses(): Promise<Address[]> {
    return this.addressService.findAllAddresses();
  }


  @Query(() => Address)
  async address(@Args() args: FindUniqueAddressArgs)  {
    return this.addressService.findAddressById(args);
  }

  @ResolveField(() => [AddressPerson])
  async addressPersons(@Parent() address: Address) {
    return this.addressService.findAddressPersonsByAddressId(address.addressId);
  }

  @ResolveField(() => [AddressWorkshop!])
  async addressWorkshops(
    @Parent() address: Address,
  ){
    return this.addressService.findAddressWorkshopsByAddressId(
      address.addressId,
    );
  }
}
