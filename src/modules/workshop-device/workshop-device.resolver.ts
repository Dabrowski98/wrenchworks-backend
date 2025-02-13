import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { WorkshopDeviceService } from './workshop-device.service';
import { WorkshopDevice } from './dto/workshop-device.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { WorkshopDeviceCreateInput } from './dto/workshop-device-create.input';
import { FindUniqueWorkshopDeviceArgs } from './dto/find-unique-workshop-device.args';
import {
  UpdateOneWorkshopDeviceArgs,
  DeleteOneWorkshopDeviceArgs,
  FindManyWorkshopDeviceArgs,
  DeleteManyWorkshopDeviceArgs,
} from './dto';
import { Action } from '../ability';
import { CheckAbilities } from '../ability';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards/employee-jwt-auth.guard';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { WorkshopDeviceChangeNameArgs } from './custom-dto/workshop-device-change-name.args';
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';
import { PureAbility } from '@casl/ability';

@Resolver(() => WorkshopDevice)
export class WorkshopDeviceResolver {
  constructor(private readonly workshopDeviceService: WorkshopDeviceService) {}

  // ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Read, subject: 'WorkshopDevice' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => WorkshopDevice)
  workshopDevice(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: FindUniqueWorkshopDeviceArgs,
  ) {
    return this.workshopDeviceService.findOne(currentEntity, args);
  }

  // ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Read, subject: 'WorkshopDevice' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [WorkshopDevice])
  workshopDevices(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args?: FindManyWorkshopDeviceArgs,
  ) {
    return this.workshopDeviceService.findMany(currentEntity, args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Moderate, subject: 'WorkshopDevice' })
  @OrGuards(UserJwtAuthGuard)
  @Mutation(() => WorkshopDevice)
  updateWorkshopDevice(@Args() args: UpdateOneWorkshopDeviceArgs) {
    return this.workshopDeviceService.update(args);
  }

  // ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'WorkshopDevice' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => WorkshopDevice)
  changeWorkshopDeviceName(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: WorkshopDeviceChangeNameArgs,
  ) {
    return this.workshopDeviceService.changeName(currentEntity, args);
  }

  // ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'WorkshopDevice' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  disableWorkshopDevice(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args('deviceId') deviceId: bigint,
  ) {
    return this.workshopDeviceService.disable(currentEntity, deviceId);
  }

  // ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'WorkshopDevice' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  enableWorkshopDevice(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args('deviceId') deviceId: bigint,
  ) {
    return this.workshopDeviceService.enable(currentEntity, deviceId);
  }

  // ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Delete, subject: 'WorkshopDevice' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteManyWorkshopDevice(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: DeleteManyWorkshopDeviceArgs,
  ): Promise<boolean> {
    return this.workshopDeviceService.deleteMany(currentEntity, args);
  }

  // RESOLVE FIELDS

  @Public()
  @ResolveField(() => Workshop, { nullable: true })
  workshop(
    @CurrentAbility() ability: PureAbility,
    @Parent() workshopDevice: WorkshopDevice,
  ): Promise<Workshop | null> {
    return this.workshopDeviceService.workshop(
      ability,
      workshopDevice.workshopDeviceId,
    );
  }
}
