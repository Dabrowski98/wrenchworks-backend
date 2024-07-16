import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { VehicleDetails } from './entities/vehicle-detail.entity';
import { VehicleDetailsService } from './vehicle-details.service';
import { CreateVehicleDetailsInput, UpdateVehicleDetailsInput } from './dto/index';

@Resolver(() => VehicleDetails)
export class VehicleDetailsResolver {
  constructor(private readonly vehicleDetailsService: VehicleDetailsService) {}

  @Mutation(() => VehicleDetails)
  async createVehicleDetails(@Args('data') data: CreateVehicleDetailsInput) {
    return this.vehicleDetailsService.createVehicleDetails(data);
  }

  @Mutation(() => VehicleDetails)
  async updateVehicleDetails(@Args('data') data: UpdateVehicleDetailsInput) {
    return this.vehicleDetailsService.updateVehicleDetails(data);
  }

  @Query(() => VehicleDetails, { nullable: true })
  async vehicleDetails(@Args('vehicleId') vehicleId: bigint) {
    return this.vehicleDetailsService.findVehicleDetailsById(vehicleId);
  }
}
