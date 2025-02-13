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
  DeleteManyVehicleArgs,
} from './dto';
import { ServiceRequest } from '../service-request/dto';
import { Service } from '../service/dto';
import { VehicleModel } from '../vehicle-model/dto';
import { Customer } from '../customer/dto';
import { VehicleDetails } from '../vehicle-details/dto';
import { Guest } from '../guest/dto';
import { VehicleService } from './vehicle.service';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { CreateOneVehicleForUserArgs } from './custom-dto/create-one-vehicle-for-user.args';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';
import { PureAbility } from '@casl/ability';

@Resolver(() => Vehicle)
export class VehicleResolver {
  constructor(private readonly vehicleService: VehicleService) {}

  // ADMIN, USER for himself
  @CheckAbilities({ action: Action.Create, subject: 'Vehicle' })
  @OrGuards(UserJwtAuthGuard)
  @Mutation(() => Vehicle)
  async createVehicleForUser(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: CreateOneVehicleForUserArgs,
  ): Promise<Vehicle> {
    return this.vehicleService.createForUser(currentUser, args);
  }

  // ADMIN, EMPLOYEE for customer
  @CheckAbilities({ action: Action.Create, subject: 'Vehicle' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Vehicle)
  async createVehicleForCustomer(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: CreateOneVehicleArgs,
  ): Promise<Vehicle> {
    return this.vehicleService.createForCustomer(currentEntity, args);
  }

  // ADMIN, USER (his own), EMPLOYEE (for customer)
  @CheckAbilities({ action: Action.Read, subject: 'Vehicle' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => Vehicle)
  async vehicle(
    @CurrentEntity() currentEntity: JwtEmployeePayload,
    @Args() args: FindUniqueVehicleArgs,
  ): Promise<Vehicle> {
    return this.vehicleService.findOne(currentEntity, args);
  }

  // ADMIN, USER (his own), EMPLOYEE (for customer and workshop)
  @CheckAbilities({ action: Action.Read, subject: 'Vehicle' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [Vehicle])
  async vehicles(
    @CurrentEntity() currentEntity: JwtEmployeePayload,
    @Args() args: FindManyVehicleArgs,
  ): Promise<Vehicle[]> {
    return this.vehicleService.findMany(currentEntity, args);
  }

  // ADMIN, USER (his own), EMPLOYEE (for customer and workshop)
  @CheckAbilities({ action: Action.Update, subject: 'Vehicle' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Vehicle)
  async updateVehicle(
    @CurrentEntity() currentEntity: JwtEmployeePayload,
    @Args() args: UpdateOneVehicleArgs,
  ): Promise<Vehicle> {
    return this.vehicleService.update(currentEntity, args);
  }

  // ADMIN, USER (his own), EMPLOYEE (for customer and workshop)
  @CheckAbilities({ action: Action.Delete, subject: 'Vehicle' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteVehicle(
    @CurrentEntity() currentEntity: JwtEmployeePayload,
    @Args() args: DeleteOneVehicleArgs,
  ): Promise<boolean> {
    return this.vehicleService.delete(currentEntity, args);
  }

  // ADMIN, USER (his own), EMPLOYEE (for customer and workshop)
  @CheckAbilities({ action: Action.Delete, subject: 'Vehicle' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteManyVehicle(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: DeleteManyVehicleArgs,
  ): Promise<boolean> {
    return this.vehicleService.deleteMany(currentEntity, args);
  }

  // RESOLVE FIELDS
 
  @ResolveField(() => [ServiceRequest], { nullable: true })
  async serviceRequests(
    @CurrentAbility() ability: PureAbility,
    @Parent() vehicle: Vehicle,
  ): Promise<ServiceRequest[]> {
    return this.vehicleService.serviceRequests(ability, vehicle.vehicleId);
  }
 
  @ResolveField(() => [Service], { nullable: true })
  async services(
    @CurrentAbility() ability: PureAbility,
    @Parent() vehicle: Vehicle,
  ): Promise<Service[]> {
    return this.vehicleService.services(ability, vehicle.vehicleId);
  }

  @Public()
  @ResolveField(() => VehicleModel, { nullable: true })
  async vehicleModel(
    @CurrentAbility() ability: PureAbility,
    @Parent() vehicle: Vehicle,
  ): Promise<VehicleModel | null> {
    return this.vehicleService.vehicleModel(ability, vehicle.vehicleId);
  }

  @ResolveField(() => User)
  async user(
    @CurrentAbility() ability: PureAbility,
    @Parent() vehicle: Vehicle,
  ): Promise<User | null> {
    return this.vehicleService.user(ability, vehicle.vehicleId);
  }

  @ResolveField(() => Customer, { nullable: true })
  async customer(
    @CurrentAbility() ability: PureAbility,
    @Parent() vehicle: Vehicle,
  ): Promise<Customer | null> {
    return this.vehicleService.customer(ability, vehicle.vehicleId);
  }

  @ResolveField(() => Guest, { nullable: true })
  async guest(
    @CurrentAbility() ability: PureAbility,
    @Parent() vehicle: Vehicle,
  ): Promise<Guest | null> {
    return this.vehicleService.guest(ability, vehicle.vehicleId);
  }

  @ResolveField(() => VehicleDetails, { nullable: true })
  async vehicleDetails(
    @CurrentAbility() ability: PureAbility,
    @Parent() vehicle: Vehicle,
  ): Promise<VehicleDetails | null> {
    return this.vehicleService.vehicleDetails(ability, vehicle.vehicleId);
  }

  @ResolveField(() => VehicleCount)
  async _count(
    @CurrentAbility() ability: PureAbility,
    @Parent() vehicle: Vehicle,
  ): Promise<VehicleCount> {
    return this.vehicleService.resolveCount(ability, vehicle.vehicleId);
  }
}
