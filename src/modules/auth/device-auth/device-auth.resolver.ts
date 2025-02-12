import { UseGuards } from '@nestjs/common';
import { Args, Resolver } from '@nestjs/graphql';
import { Mutation } from '@nestjs/graphql';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { CurrentEmployeeID } from 'src/common/decorators/jwt-decorators/current-employee-id.decorator';
import { WorkshopDevice } from 'src/modules/workshop-device/dto/workshop-device.model';
import * as Scalars from 'graphql-scalars';
import { DeviceAuthService } from './device-auth.service';
import { EmployeeJwtAuthGuard } from '../employee-auth/guards/employee-jwt-auth.guard';
import { RequestDeviceRegistrationInput } from './dto/request-device-registration.input';
import { AcceptWorkshopDeviceInput } from './dto/accept-workshop-device.input';
import { CheckAbilities } from 'src/modules/ability/abilities.decorator';
import { Action } from 'src/modules/ability/ability.factory';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { UserJwtAuthGuard } from '../user-auth/guards/user-jwt-auth.guard';
import { JwtEmployeePayload } from '../employee-auth/dto';
import { CurrentEmployee } from 'src/common/decorators/jwt-decorators/current-employee.decorator';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { JwtUserPayload } from '../user-auth/dto';

@Resolver()
export class DeviceAuthResolver {
  constructor(private readonly deviceAuthService: DeviceAuthService) {}

  // EMPLOYEE with right permissions can generate device OTP
  // USER (owner) can generate device OTP
  @CheckAbilities({ action: Action.Create, subject: 'WorkshopDevice' })
  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => String)
  generateDeviceOTP(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args('workshopId', { type: () => Scalars.GraphQLBigInt })
    workshopId: bigint,
  ): Promise<string> {
    return this.deviceAuthService.generateDeviceOTP(currentEntity, workshopId);
  }

  // ANYONE can request device registration (by inputting device OTP)
  @Public()
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard) // keep guards as they provide logged entity data.
  @Mutation(() => Boolean)
  async requestDeviceRegistration(
    @Args('requestDeviceRegistrationInput')
    requestDeviceRegistrationInput: RequestDeviceRegistrationInput,
  ): Promise<boolean> {
    const device = await this.deviceAuthService.requestDeviceRegistration(
      requestDeviceRegistrationInput,
    );
    return !!device;
  }

  // USER(Owner) can accept device registration
  // EMPLOYEE with right permissions can accept device registration
  @CheckAbilities({ action: Action.Create, subject: 'WorkshopDevice' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => WorkshopDevice)
  acceptDeviceRegistration(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args('acceptWorkshopDeviceInput')
    acceptWorkshopDeviceInput: AcceptWorkshopDeviceInput,
  ): Promise<WorkshopDevice> {
    return this.deviceAuthService.acceptDeviceRegistration(
      currentEntity,
      acceptWorkshopDeviceInput,
    );
  }

  // USER(Owner) can remove device
  // EMPLOYEE with right permissions can remove device
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
