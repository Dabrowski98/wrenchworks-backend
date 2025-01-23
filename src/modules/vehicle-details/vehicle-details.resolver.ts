import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { VehicleDetailsService } from './vehicle-details.service';
import { Vehicle } from '../vehicle/dto';
import { DeleteOneVehicleDetailsArgs, FindManyVehicleDetailsArgs, FindUniqueVehicleDetailsArgs, UpdateOneVehicleDetailsArgs } from './dto';
import { CreateOneVehicleDetailsArgs } from './dto';
import { VehicleDetails } from './dto';

@Resolver(() => VehicleDetails)
export class VehicleDetailsResolver {
  constructor(private readonly vehicleDetailsService: VehicleDetailsService) {}

  @Mutation(() => VehicleDetails)
  async createVehicleDetails(
    @Args() args: CreateOneVehicleDetailsArgs,
  ): Promise<VehicleDetails> {
    return this.vehicleDetailsService.create(args);
  }

  @Query(() => VehicleDetails)
  async vehicleDetails(
    @Args() args: FindUniqueVehicleDetailsArgs,
  ): Promise<VehicleDetails> {
    return this.vehicleDetailsService.findOne(args);
  }

  @Query(() => [VehicleDetails])
  async vehicleDetailsList(
    @Args() args: FindManyVehicleDetailsArgs,
  ): Promise<VehicleDetails[]> {
    return this.vehicleDetailsService.findMany(args);
  }

  @Mutation(() => VehicleDetails)
  async updateVehicleDetails(
    @Args() args: UpdateOneVehicleDetailsArgs,
  ): Promise<VehicleDetails> {
    return this.vehicleDetailsService.update(args);
  }

  @Mutation(() => Boolean)
  async deleteVehicleDetails(
    @Args() args: DeleteOneVehicleDetailsArgs,
  ): Promise<boolean> {
    return this.vehicleDetailsService.delete(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => Vehicle)
  async vehicle(@Parent() vehicleDetails: VehicleDetails): Promise<Vehicle> {
    return this.vehicleDetailsService.vehicle(vehicleDetails.vehicleDetailsId);
  }
}
