import { Args, Mutation, Parent, Query, ResolveField } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { User } from '../user/dto';
import { Action, CheckAbilities } from '../ability';
import {
  CreateOneVehicleArgs,
  Vehicle,
  FindUniqueVehicleArgs,
  FindManyVehicleArgs,
  UpdateOneVehicleArgs,
  DeleteOneVehicleArgs,
  VehicleCount,
} from './dto';
import { ServiceRequest } from '../service-request/dto';
import { Service } from '../service/dto';
import { VehicleModel } from '../vehicle-model/dto';
import { Customer } from '../customer/dto';
import { VehicleDetails } from '../vehicle-details/dto';
import { Guest } from '../guest/dto';
import { VehicleService } from './vehicle.service';

@Resolver(() => Vehicle)
export class VehicleResolver {
  constructor(private readonly vehicleService: VehicleService) {}

  @Mutation(() => Vehicle)
  async createVehicle(
    @Args() args: CreateOneVehicleArgs,
    @CurrentUserID() userId: bigint,
  ): Promise<Vehicle> {
    return this.vehicleService.create(args, userId);
  }

  @Query(() => Vehicle)
  async vehicle(@Args() args: FindUniqueVehicleArgs): Promise<Vehicle> {
    return this.vehicleService.findOne(args);
  }

  @Query(() => [Vehicle])
  async vehicles(@Args() args: FindManyVehicleArgs): Promise<Vehicle[]> {
    return this.vehicleService.findMany(args);
  }

  @Mutation(() => Vehicle)
  async updateVehicle(@Args() args: UpdateOneVehicleArgs): Promise<Vehicle> {
    return this.vehicleService.update(args);
  }

  @Mutation(() => Boolean)
  async deleteVehicle(@Args() args: DeleteOneVehicleArgs): Promise<boolean> {
    return this.vehicleService.delete(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => [ServiceRequest])
  async serviceRequests(@Parent() vehicle: Vehicle): Promise<ServiceRequest[]> {
    return this.vehicleService.serviceRequests(vehicle.vehicleId);
  }

  @ResolveField(() => [Service])
  async services(@Parent() vehicle: Vehicle): Promise<Service[]> {
    return this.vehicleService.services(vehicle.vehicleId);
  }

  @ResolveField(() => VehicleModel)
  async vehicleModel(@Parent() vehicle: Vehicle): Promise<VehicleModel> {
    return this.vehicleService.vehicleModel(vehicle.vehicleId);
  }

  @ResolveField(() => User)
  async user(@Parent() vehicle: Vehicle): Promise<User> {
    return this.vehicleService.user(vehicle.vehicleId);
  }

  @ResolveField(() => [Customer])
  async customers(@Parent() vehicle: Vehicle): Promise<Customer[]> {
    return this.vehicleService.customers(vehicle.vehicleId);
  }

  @ResolveField(() => Guest)
  async guest(@Parent() vehicle: Vehicle): Promise<Guest> {
    return this.vehicleService.guest(vehicle.vehicleId);
  }

  @ResolveField(() => VehicleDetails)
  async vehicleDetails(@Parent() vehicle: Vehicle): Promise<VehicleDetails> {
    return this.vehicleService.vehicleDetails(vehicle.vehicleId);
  }

  @ResolveField(() => VehicleCount)
  async _count(@Parent() vehicle: Vehicle): Promise<VehicleCount> {
    return this.vehicleService.resolveCount(vehicle.vehicleId);
  }
}
