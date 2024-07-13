import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VehicleBrand } from './entities/vehicle-brand.entity';
import { VehicleBrandService } from './vehicle-brand.service';
import { CreateVehicleBrandInput } from './dto/index';

@Resolver(() => VehicleBrand)
export class VehicleBrandResolver {
  constructor(private readonly vehicleBrandService: VehicleBrandService) {}

  @Mutation(() => VehicleBrand)
  async createVehicleBrand(
    @Args('createVehicleBrandInput')
    data: CreateVehicleBrandInput,
  ) {
    return this.vehicleBrandService.createVehicleBrand(data);
  }

  @Mutation(() => VehicleBrand)
  async destroyVehicleBrand(@Args('brandName') brandName: string) {
    return this.vehicleBrandService.destroyVehicleBrand(brandName);
  }

  @Query(() => [VehicleBrand])
  async vehicleBrands() {
    return this.vehicleBrandService.findVehicleBrands();
  }

  @Query(() => VehicleBrand, { nullable: true })
  async vehicleBrand(@Args('brandName') brandName: string) {
    return this.vehicleBrandService.findVehicleBrandById(brandName);
  }
}
