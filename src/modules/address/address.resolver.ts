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
  FindManyAddressArgs,
  FindUniqueAddressArgs,
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
  address(@Args() args: FindUniqueAddressArgs): Promise<Address> {
    return this.addressService.findOne(args);
  }

  @Query(() => [Address])
  addresses(@Args() args?: FindManyAddressArgs): Promise<Address[]> {
    return this.addressService.findMany(args);
  }

  @Mutation(() => Boolean)
  deleteAddress(@Args() args: DeleteOneAddressArgs): Promise<Boolean> {
    return this.addressService.delete(args);
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
