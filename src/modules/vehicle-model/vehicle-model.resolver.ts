import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { VehicleModelService } from './vehicle-model.service';
import { VehicleModel, VehicleModelCount } from './dto';
import {
  CreateOneVehicleModelArgs,
  DeleteOneVehicleModelArgs,
  FindManyVehicleModelArgs,
  FindUniqueVehicleModelArgs,
  UpdateOneVehicleModelArgs,
} from './dto';
import { VehicleBrand } from '../vehicle-brand/dto';
import { Vehicle } from '../vehicle/dto';

@Resolver(() => VehicleModel)
export class VehicleModelResolver {
  constructor(private readonly vehicleModelService: VehicleModelService) {}

  @Mutation(() => VehicleModel)
  async createVehicleModel(
    @Args() args: CreateOneVehicleModelArgs,
  ): Promise<VehicleModel> {
    return this.vehicleModelService.create(args);
  }

  @Query(() => VehicleModel)
  async vehicleModel(
    @Args() args: FindUniqueVehicleModelArgs,
  ): Promise<VehicleModel> {
    return this.vehicleModelService.findOne(args);
  }

  @Query(() => [VehicleModel])
  async vehicleModels(
    @Args() args: FindManyVehicleModelArgs,
  ): Promise<VehicleModel[]> {
    return this.vehicleModelService.findMany(args);
  }

  @Mutation(() => VehicleModel)
  async updateVehicleModel(
    @Args() args: UpdateOneVehicleModelArgs,
  ): Promise<VehicleModel> {
    return this.vehicleModelService.update(args);
  }

  @Mutation(() => Boolean)
  async deleteVehicleModel(
    @Args() args: DeleteOneVehicleModelArgs,
  ): Promise<boolean> {
    return this.vehicleModelService.delete(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => VehicleBrand)
  async vehicleBrand(
    @Parent() vehicleModel: VehicleModel,
  ): Promise<VehicleBrand> {
    return this.vehicleModelService.vehicleBrand(vehicleModel.modelId);
  }

  @ResolveField(() => [Vehicle])
  async vehicles(@Parent() vehicleModel: VehicleModel): Promise<Vehicle[]> {
    return this.vehicleModelService.vehicles(vehicleModel.modelId);
  }

  @ResolveField(() => VehicleModelCount)
  async _count(
    @Parent() vehicleModel: VehicleModel,
  ): Promise<VehicleModelCount> {
    return this.vehicleModelService.resolveCount(vehicleModel.modelId);
  }
}
