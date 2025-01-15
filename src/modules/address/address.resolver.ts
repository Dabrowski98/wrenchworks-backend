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
  AddressCreateInput,
  AddressUpdateInput,
  AddressWhereUniqueInput,
  CreateOneAddressArgs,
  FindManyAddressArgs,
  UpdateOneAddressArgs,
} from './dto';
import { GraphQLBigInt } from 'graphql-scalars';
import { DeletePayload } from 'src/common/payloads/delete.payload';
import { User } from '../user/dto';
import { Workshop } from '../workshop/dto';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Mutation(() => Address)
  createAddress(@Args() args: CreateOneAddressArgs): Promise<Address> {
    return this.addressService.create(args);
  }

  @Mutation(() => Address)
  updateAddress(@Args() args: UpdateOneAddressArgs): Promise<Address> {
    return this.addressService.update(args);
  }

  @Query(() => Address)
  address(
    @Args('addressId', { type: () => GraphQLBigInt }) addressId,
  ): Promise<Address> {
    return this.addressService.findById(addressId);
  }

  @Query(() => [Address])
  addresses(@Args() args?: FindManyAddressArgs): Promise<Address[]> {
    return this.addressService.findMany(args);
  }

  @Mutation(() => DeletePayload)
  deleteAddress(
    @Args('addressId', { type: () => GraphQLBigInt }) addressId,
  ): Promise<DeletePayload> {
    return this.addressService.delete(addressId);
  }

  //RESOLVE FIELDS

  @ResolveField(() => User)
  user(@Parent() address: Address): Promise<User> {
    return this.addressService.user(address.addressId);
  }

  @ResolveField(() => Workshop)
  workshop(@Parent() address: Address): Promise<Workshop> {
    return this.addressService.workshop(address.addressId);
  }
}
