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
  DeleteOneAddressArgs,
  FindManyAddressArgs,
  FindUniqueAddressArgs,
  UpdateOneAddressArgs,
} from './dto';
import { User } from '../user/dto';
import { Workshop } from '../workshop/dto';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { Action, CheckAbilities } from '../ability';
import { CreateAddressForUserArgs } from './custom-dto/create-create-for-user.args';
import { CreateAddressForWorkshopArgs } from './custom-dto/create-address-for-workshop.args';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UseGuards } from '@nestjs/common';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { JwtUserPayload } from '../auth/user-auth/dto';

@UseGuards(UserJwtAuthGuard, AbilitiesGuard)
@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @CheckAbilities({ action: Action.Create, subject: 'Address' })
  @Mutation(() => Address)
  async createAddressForUser(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: CreateAddressForUserArgs,
  ): Promise<Address> {
    return this.addressService.createAddressForUser(args, currentUser);
  }

  @CheckAbilities({ action: Action.Create, subject: 'Address' })
  @Mutation(() => Address)
  async createAddressForWorkshop(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: CreateAddressForWorkshopArgs,
  ): Promise<Address> {
    return this.addressService.createAddressForWorkshop(args, currentUser);
  }

  @CheckAbilities({ action: Action.Update, subject: 'Address' })
  @Mutation(() => Address)
  async updateAddress(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: UpdateOneAddressArgs,
  ): Promise<Address> {
    return this.addressService.update(args, currentUser);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Address' })
  @Query(() => Address)
  async address(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: FindUniqueAddressArgs,
  ): Promise<Address> {
    return this.addressService.findOne(args, currentUser);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Address' })
  @Query(() => [Address])
  addresses(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args?: FindManyAddressArgs,
  ): Promise<Address[]> {
    return this.addressService.findMany(args ?? {}, currentUser);
  }

  @CheckAbilities({ action: Action.Delete, subject: 'Address' })
  @Mutation(() => Boolean)
  async deleteAddress(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: DeleteOneAddressArgs,
  ): Promise<Boolean> {
    return this.addressService.delete(args, currentUser);
  }

  //RESOLVE FIELDS

  @CheckAbilities({ action: Action.Read, subject: 'User' })
  @ResolveField(() => User)
  user(@Parent() address: Address): Promise<User | null> {
    return this.addressService.user(address.addressId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Workshop' })
  @ResolveField(() => Workshop)
  workshop(@Parent() address: Address): Promise<Workshop> {
    return this.addressService.workshop(address.addressId);
  }
}
