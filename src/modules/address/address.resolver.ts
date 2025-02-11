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
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { CurrentEmployee } from 'src/common/decorators/jwt-decorators/current-employee.decorator';
import { JwtEmployeePayload } from '../auth/employee-auth/dto';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  // GOOD
  @CheckAbilities({ action: Action.Create, subject: 'Address' })
  @OrGuards(UserJwtAuthGuard)
  @Mutation(() => Address)
  async createAddressForUser(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: CreateAddressForUserArgs,
  ): Promise<Address> {
    return this.addressService.createAddressForUser(args, currentUser);
  }


  @CheckAbilities({ action: Action.Create, subject: 'Address' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Address)
  async createAddressForWorkshop(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: CreateAddressForWorkshopArgs,
  ): Promise<Address> {
    return this.addressService.createAddressForWorkshop(args, currentEntity);
  }

  @CheckAbilities({ action: Action.Update, subject: 'Address' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Address)
  async updateAddress(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: UpdateOneAddressArgs,
  ): Promise<Address> {
    return this.addressService.update(args, currentEntity);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Address' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => Address)
  async address(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: FindUniqueAddressArgs,
  ): Promise<Address> {
    return this.addressService.findOne(args, currentEntity);
  }

  //RECONSIDER
  @CheckAbilities({ action: Action.Read, subject: 'Address' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [Address])
  addresses(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args?: FindManyAddressArgs,
  ): Promise<Address[]> {
    return this.addressService.findMany(args ?? {}, currentEntity);
  }


  @CheckAbilities({ action: Action.Delete, subject: 'Address' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteAddress(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: DeleteOneAddressArgs,
  ): Promise<Boolean> {
    return this.addressService.delete(args, currentEntity);
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
