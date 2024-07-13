import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VehicleModelService } from './vehicle-model.service';
import { CreateVehicleModelInput, UpdateVehicleModelInput } from './dto/index';
import { VehicleModel } from './entities/vehicle-model.entity';

@Resolver(() => VehicleModel)
export class VehicleModelResolver {
  constructor(private readonly vehicleModelService: VehicleModelService) {}

  @Mutation(() => VehicleModel)
  async createVehicleModel(
    @Args('createVehicleModelInput')
    data: CreateVehicleModelInput,
  ) {
    return this.vehicleModelService.createVehicleModel(data);
  }

  @Mutation(() => VehicleModel)
  async destroyVehicleModel(
    @Args('modelName') modelName: string,
    @Args('brandName') brandName: string,
  ) {
    return this.vehicleModelService.destroyVehicleModel({
      modelName,
      brandName,
    });
  }

  @Query(() => [VehicleModel], { name: 'vehicleModels' })
  async findVehicleModels() {
    return this.vehicleModelService.findVehicleModels();
  }

  @Query(() => VehicleModel, { name: 'vehicleModel' })
  async findVehicleModelByModelAndBrand(
    @Args('modelName') modelName: string,
    @Args('brandName') brandName: string,
  ) {
    return this.vehicleModelService.findVehicleModelByModelAndBrand({
      modelName,
      brandName,
    });
  }
}
