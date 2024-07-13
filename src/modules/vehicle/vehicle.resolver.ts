import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Vehicle } from './entities/vehicle.entity';
import { VehicleService } from './vehicle.service';
import { CreateVehicleInput, UpdateVehicleInput } from './dto/index';

@Resolver(() => Vehicle)
export class VehicleResolver {
  constructor(private readonly vehicleService: VehicleService) {}

  @Mutation(() => Vehicle)
  async createVehicle(@Args('data') data: CreateVehicleInput) {
    return this.vehicleService.createVehicle(data);
  }

  @Mutation(() => Vehicle)
  async updateVehicle(@Args('data') data: UpdateVehicleInput) {
    return this.vehicleService.updateVehicle(data);
  }

  @Query(() => [Vehicle])
  async vehicles() {
    return this.vehicleService.findAllVehicles();
  }

  @Query(() => Vehicle, { nullable: true })
  async vehicle(@Args('vehicleId', { type: () => BigInt }) vehicleId: bigint) {
    return this.vehicleService.findVehicleById(vehicleId);
  }

  @Mutation(() => Vehicle)
  async deleteVehicle(@Args('vehicleId', { type: () => BigInt }) vehicleId: bigint) {
    return this.vehicleService.deleteVehicle(vehicleId);
  }
}
