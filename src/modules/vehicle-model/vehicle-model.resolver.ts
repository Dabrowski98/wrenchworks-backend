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
import { CheckAbilities } from '../ability';
import { Action } from '../ability';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { UseGuards } from '@nestjs/common';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';
import { PureAbility } from '@casl/ability';

@Resolver(() => VehicleModel)
export class VehicleModelResolver {
  constructor(private readonly vehicleModelService: VehicleModelService) {}

  // ADMIN
  @CheckAbilities({ action: Action.Create, subject: 'VehicleModel' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => VehicleModel)
  async createVehicleModel(
    @Args() args: CreateOneVehicleModelArgs,
  ): Promise<VehicleModel> {
    return this.vehicleModelService.create(args);
  }

  // PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'VehicleModel' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => VehicleModel)
  async vehicleModel(
    @Args() args: FindUniqueVehicleModelArgs,
  ): Promise<VehicleModel> {
    return this.vehicleModelService.findOne(args);
  }

  // PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'VehicleModel' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [VehicleModel])
  async vehicleModels(
    @Args() args?: FindManyVehicleModelArgs,
  ): Promise<VehicleModel[]> {
    return this.vehicleModelService.findMany(args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Moderate, subject: 'VehicleModel' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => VehicleModel)
  async updateVehicleModel(
    @Args() args: UpdateOneVehicleModelArgs,
  ): Promise<VehicleModel> {
    return this.vehicleModelService.update(args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Delete, subject: 'VehicleModel' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteVehicleModel(
    @Args() args: DeleteOneVehicleModelArgs,
  ): Promise<boolean> {
    return this.vehicleModelService.delete(args);
  }

  // RESOLVE FIELDS 

  // PUBLIC
  @Public()
  @ResolveField(() => VehicleBrand, { nullable: true })
  async vehicleBrand(
    @CurrentAbility() ability: PureAbility,
    @Parent() vehicleModel: VehicleModel,
  ): Promise<VehicleBrand | null> {
    return this.vehicleModelService.vehicleBrand(ability, vehicleModel.modelId);
  }


  @ResolveField(() => [Vehicle], { nullable: true })
  async vehicles(
    @CurrentAbility() ability: PureAbility,
    @Parent() vehicleModel: VehicleModel,
  ): Promise<Vehicle[] | null> {
    return this.vehicleModelService.vehicles(ability, vehicleModel.modelId);
  }

  // PUBLIC
  @Public()
  @ResolveField(() => VehicleModelCount)
  async _count(
    @CurrentAbility() ability: PureAbility,
    @Parent() vehicleModel: VehicleModel,
  ): Promise<VehicleModelCount> {
    return this.vehicleModelService.resolveCount(ability, vehicleModel.modelId);
  }
}
