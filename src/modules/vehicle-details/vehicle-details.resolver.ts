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
import {
  DeleteOneVehicleDetailsArgs,
  FindManyVehicleDetailsArgs,
  FindUniqueVehicleDetailsArgs,
  UpdateOneVehicleDetailsArgs,
} from './dto';
import { CreateOneVehicleDetailsArgs } from './dto';
import { VehicleDetails } from './dto';
import { CheckAbilities } from '../ability/abilities.decorator';
import { UserJwtAuthGuard } from '../auth/user-auth/guards/user-jwt-auth.guard';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards/employee-jwt-auth.guard';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { Action } from '../ability';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';

@Resolver(() => VehicleDetails)
export class VehicleDetailsResolver {
  constructor(private readonly vehicleDetailsService: VehicleDetailsService) {}

  // ADMIN, USER (his own), EMPLOYEE (for customer)
  @CheckAbilities({ action: Action.Create, subject: 'VehicleDetails' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => VehicleDetails)
  async createVehicleDetails(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: CreateOneVehicleDetailsArgs,
  ): Promise<VehicleDetails> {
    return this.vehicleDetailsService.create(currentEntity, args);
  }

  // ADMIN, USER (his own), EMPLOYEE (for customer)
  @CheckAbilities({ action: Action.Read, subject: 'VehicleDetails' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => VehicleDetails)
  async vehicleDetails(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: FindUniqueVehicleDetailsArgs,
  ): Promise<VehicleDetails> {
    return this.vehicleDetailsService.findOne(currentEntity, args);
  }

  // ADMIN, USER (his own), EMPLOYEE (for customer)
  @CheckAbilities({ action: Action.Read, subject: 'VehicleDetails' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [VehicleDetails])
  async vehicleDetailsList(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: FindManyVehicleDetailsArgs,
  ): Promise<VehicleDetails[]> {
    return this.vehicleDetailsService.findMany(currentEntity, args);
  }

  // ADMIN, USER (his own), EMPLOYEE (for customer)
  @CheckAbilities({ action: Action.Update, subject: 'VehicleDetails' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => VehicleDetails)
  async updateVehicleDetails(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: UpdateOneVehicleDetailsArgs,
  ): Promise<VehicleDetails> {
    return this.vehicleDetailsService.update(currentEntity, args);
  }

  // ADMIN, USER (his own), EMPLOYEE (for customer)
  @CheckAbilities({ action: Action.Delete, subject: 'VehicleDetails' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteVehicleDetails(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: DeleteOneVehicleDetailsArgs,
  ): Promise<boolean> {
    return this.vehicleDetailsService.delete(currentEntity, args);
  }

  // RESOLVE FIELDS

  // ADMIN, USER (his own), EMPLOYEE (for customer)
  @CheckAbilities({ action: Action.Read, subject: 'Vehicle' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @ResolveField(() => Vehicle)
  async vehicle(@Parent() vehicleDetails: VehicleDetails): Promise<Vehicle> {
    return this.vehicleDetailsService.vehicle(vehicleDetails.vehicleDetailsId);
  }
}
