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
import { CreateOneVehicleBrandArgs, DeleteOneVehicleBrandArgs, FindManyVehicleBrandArgs, FindUniqueVehicleBrandArgs, UpdateOneVehicleBrandArgs, VehicleBrand, VehicleBrandCount } from './dto';
import { VehicleBrandService } from './vehicle-brand.service';

@Resolver(() => VehicleBrand)
export class VehicleBrandResolver {
  constructor(private readonly vehicleBrandService: VehicleBrandService) {}

  @Mutation(() => VehicleBrand)
  async createVehicleBrand(
    @Args() args: CreateOneVehicleBrandArgs,
  ): Promise<VehicleBrand> {
    return this.vehicleBrandService.create(args);
  }

  @Query(() => VehicleBrand)
  async vehicleBrand(@Args() args: FindUniqueVehicleBrandArgs): Promise<VehicleBrand> {
    return this.vehicleBrandService.findOne(args);
  }

  @Query(() => [VehicleBrand])
  async vehicleBrands(@Args() args: FindManyVehicleBrandArgs): Promise<VehicleBrand[]> {
    return this.vehicleBrandService.findMany(args);
  }

  @Mutation(() => VehicleBrand)
  async updateVehicleBrand(@Args() args: UpdateOneVehicleBrandArgs): Promise<VehicleBrand> {
    return this.vehicleBrandService.update(args);
  }

  @Mutation(() => Boolean)
  async deleteVehicleBrand(@Args() args: DeleteOneVehicleBrandArgs): Promise<boolean> {
    return this.vehicleBrandService.delete(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => [VehicleModel])
  async vehicleModels(@Parent() vehicleBrand: VehicleBrand): Promise<VehicleModel[]> {
    return this.vehicleBrandService.vehicleModels(vehicleBrand.brandName);
  }

  @ResolveField(() => VehicleBrandCount)
  async _count(@Parent() vehicleBrand: VehicleBrand): Promise<VehicleBrandCount> {
    return this.vehicleBrandService.resolveCount(vehicleBrand.brandName);
  }
}
