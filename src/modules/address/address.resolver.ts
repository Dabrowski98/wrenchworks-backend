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
  DeleteManyAddressArgs,
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
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';
import { PureAbility } from '@casl/ability';

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
  @CheckAbilities({ action: Action.Read, subject: 'Address' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => Address)
  async address(@Args() args: FindUniqueAddressArgs): Promise<Address> {
    return this.addressService.findOne(args);
  }

  // PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'Address' })
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

  // ADMIN
  @CheckAbilities({ action: Action.Manage, subject: 'Address' })
  @OrGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteManyAddress(
    @Args() args: DeleteManyAddressArgs,
  ): Promise<boolean> {
    return this.addressService.deleteMany(args);
  }

  //RESOLVE FIELDS
  @ResolveField(() => Workshop, { nullable: true })
  workshop(
    @CurrentAbility() ability: PureAbility,
    @Parent() address: Address,
  ): Promise<Workshop | null> {
    return this.addressService.workshop(ability, address.addressId);
  }
}
