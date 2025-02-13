import { Args, Mutation, Parent, Query, ResolveField } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { User } from '../user/dto';
import { Action, CheckAbilities } from '../ability';
import { ServiceRequest } from '../service-request/dto';
import { Service } from '../service/dto';
import { VehicleModel } from '../vehicle-model/dto';
import { Customer } from '../customer/dto';
import { VehicleDetails } from '../vehicle-details/dto';
import { Guest } from '../guest/dto';
import {
  CreateOneVehicleBrandArgs,
  DeleteOneVehicleBrandArgs,
  FindManyVehicleBrandArgs,
  FindUniqueVehicleBrandArgs,
  UpdateOneVehicleBrandArgs,
  VehicleBrand,
  VehicleBrandCount,
} from './dto';
import { VehicleBrandService } from './vehicle-brand.service';
import { UserJwtAuthGuard } from '../auth/user-auth/guards/user-jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';

@Resolver(() => VehicleBrand)
export class VehicleBrandResolver {
  constructor(private readonly vehicleBrandService: VehicleBrandService) {}

  // ADMIN
  @CheckAbilities({ action: Action.Create, subject: 'VehicleBrand' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => VehicleBrand)
  async createVehicleBrand(
    @Args() args: CreateOneVehicleBrandArgs,
  ): Promise<VehicleBrand> {
    return this.vehicleBrandService.create(args);
  }

  // PUBLIC
  @Public()
  @Query(() => VehicleBrand)
  async vehicleBrand(
    @Args() args: FindUniqueVehicleBrandArgs,
  ): Promise<VehicleBrand> {
    return this.vehicleBrandService.findOne(args);
  }

  // PUBLIC
  @Public()
  @Query(() => [VehicleBrand])
  async vehicleBrands(
    @Args() args?: FindManyVehicleBrandArgs,
  ): Promise<VehicleBrand[]> {
    return this.vehicleBrandService.findMany(args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Update, subject: 'VehicleBrand' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => VehicleBrand)
  async updateVehicleBrand(
    @Args() args: UpdateOneVehicleBrandArgs,
  ): Promise<VehicleBrand> {
    return this.vehicleBrandService.update(args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Delete, subject: 'VehicleBrand' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteVehicleBrand(
    @Args() args: DeleteOneVehicleBrandArgs,
  ): Promise<boolean> {
    return this.vehicleBrandService.delete(args);
  }

  // RESOLVE FIELDS

  // PUBLIC
  @Public()
  @ResolveField(() => [VehicleModel])
  async vehicleModels(
    @Parent() vehicleBrand: VehicleBrand,
  ): Promise<VehicleModel[]> {
    return this.vehicleBrandService.vehicleModels(vehicleBrand.brandName);
  }

  // PUBLIC
  @Public()
  @ResolveField(() => VehicleBrandCount)
  async _count(
    @Parent() vehicleBrand: VehicleBrand,
  ): Promise<VehicleBrandCount> {
    return this.vehicleBrandService.resolveCount(vehicleBrand.brandName);
  }
}
