import { UseGuards } from '@nestjs/common';
import { Args, Resolver } from '@nestjs/graphql';
import { Mutation } from '@nestjs/graphql';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { CurrentEmployeeID } from 'src/common/decorators/jwt-decorators/current-employee-id.decorator';
import { WorkshopDevice } from 'src/modules/workshop-device/dto/workshop-device.model';
import * as Scalars from 'graphql-scalars';
import { DeviceAuthService } from './device-auth.service';
import { EmployeeJwtAuthGuard } from '../employee-auth/guards/employee-jwt-auth.guard';
import { CheckAbilities } from 'src/modules/ability/abilities.decorator';
import { Action } from 'src/modules/ability/ability.factory';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { UserJwtAuthGuard } from '../user-auth/guards/user-jwt-auth.guard';

import { CurrentEmployee } from 'src/common/decorators/jwt-decorators/current-employee.decorator';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { JwtEmployeePayload } from '../employee-auth/custom-dto/jwt-employee-payload';
import { JwtUserPayload } from '../user-auth/custom-dto/jwt-user-payload';
import { AcceptWorkshopDeviceArgs } from './custom-dto/accept-workshop-device.args';
import { RequestDeviceRegistrationArgs } from './custom-dto/request-device-registration.args';

@Resolver()
export class DeviceAuthResolver {
  constructor(private readonly deviceAuthService: DeviceAuthService) {}

  // ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Create, subject: 'WorkshopDevice' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => String)
  generateDeviceOTP(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args('workshopId', { type: () => Scalars.GraphQLBigInt })
    workshopId: bigint,
  ): Promise<string> {
    return this.deviceAuthService.generateDeviceOTP(currentEntity, workshopId);
  }

  // PUBLIC
  @Public()
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async requestDeviceRegistration(
    @Args() requestDeviceRegistrationArgs: RequestDeviceRegistrationArgs,
  ): Promise<boolean> {
    const device = await this.deviceAuthService.requestDeviceRegistration(
      requestDeviceRegistrationArgs,
    );
    return !!device;
  }

  // ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Resolve, subject: 'WorkshopDevice' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => WorkshopDevice)
  acceptDeviceRegistration(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() acceptWorkshopDeviceArgs: AcceptWorkshopDeviceArgs,
  ): Promise<WorkshopDevice> {
    return this.deviceAuthService.acceptDeviceRegistration(
      currentEntity,
      acceptWorkshopDeviceArgs,
    );
  }

  // ADMIN, USER(Owner), EMPLOYEE
  @CheckAbilities({ action: Action.Delete, subject: 'WorkshopDevice' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  removeDevice(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args('deviceId', { type: () => Scalars.GraphQLBigInt }) deviceId: bigint,
  ): Promise<Boolean> {
    return this.deviceAuthService.removeDevice(currentEntity, deviceId);
  }
}
