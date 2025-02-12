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
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  // USER(Owner) can create address for workshop
  // EMPLOYEE with right permissions can create address for workshop
  @CheckAbilities({ action: Action.Create, subject: 'Address' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Address)
  async createAddressForWorkshop(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: CreateAddressForWorkshopArgs,
  ): Promise<Address> {
    return this.addressService.createAddressForWorkshop(currentEntity, args);
  }

  // USER(Owner) can update address
  // EMPLOYEE with right permissions can update address
  @CheckAbilities({ action: Action.Update, subject: 'Address' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Address)
  async updateAddress(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: UpdateOneAddressArgs,
  ): Promise<Address> {
    return this.addressService.update(currentEntity, args);
  }

  // ANYONE can read address
  @Public()
  @Query(() => Address)
  async address(@Args() args: FindUniqueAddressArgs): Promise<Address> {
    return this.addressService.findOne(args);
  }

  // ANYONE can read addresses
  @Public()
  @Query(() => [Address])
  addresses(@Args() args?: FindManyAddressArgs): Promise<Address[]> {
    return this.addressService.findMany(args ?? {});
  }

  // USER(Owner) can delete address
  // EMPLOYEE with right permissions can delete address
  @CheckAbilities({ action: Action.Delete, subject: 'Address' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteAddress(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: DeleteOneAddressArgs,
  ): Promise<Boolean> {
    return this.addressService.delete(currentEntity, args);
  }

  //RESOLVE FIELDS

  @CheckAbilities({ action: Action.Read, subject: 'Workshop' })
  @ResolveField(() => Workshop)
  workshop(@Parent() address: Address): Promise<Workshop> {
    return this.addressService.workshop(address.addressId);
  }
}
