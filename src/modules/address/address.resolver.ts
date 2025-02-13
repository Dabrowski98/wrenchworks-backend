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
import { Workshop } from '../workshop/dto';
import { Action, CheckAbilities } from '../ability';
import { CreateAddressForWorkshopArgs } from './custom-dto/create-address-for-workshop.args';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  // ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Create, subject: 'Address' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Address)
  async createAddressForWorkshop(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: CreateAddressForWorkshopArgs,
  ): Promise<Address> {
    return this.addressService.create(currentEntity, args);
  }

  // ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'Address' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Address)
  async updateAddress(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: UpdateOneAddressArgs,
  ): Promise<Address> {
    return this.addressService.update(currentEntity, args);
  }

  // PUBLIC
  @Public()
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => Address)
  async address(@Args() args: FindUniqueAddressArgs): Promise<Address> {
    return this.addressService.findOne(args);
  }

  // PUBLIC
  @Public()
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [Address])
  addresses(@Args() args?: FindManyAddressArgs): Promise<Address[]> {
    return this.addressService.findMany(args);
  }

  // ADMIN, USER(Owner), EMPLOYEE
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
