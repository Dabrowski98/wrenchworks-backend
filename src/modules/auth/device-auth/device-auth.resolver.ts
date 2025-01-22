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

@Resolver()
export class DeviceAuthResolver {
  constructor(private readonly deviceAuthService: DeviceAuthService) {}

  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => String)
  generateDeviceOTP(
    @CurrentEmployeeID() employeeId: bigint,
  ): Promise<string> {
    return this.deviceAuthService.generateDeviceOTP(employeeId);
  }

  @Public()
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

  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => WorkshopDevice)
  acceptDeviceRegistration(
    @Args('acceptWorkshopDeviceInput')
    acceptWorkshopDeviceInput: AcceptWorkshopDeviceInput,
    @CurrentEmployeeID() employeeId: bigint,
  ): Promise<WorkshopDevice> {
    return this.deviceAuthService.acceptDeviceRegistration(
      acceptWorkshopDeviceInput,
      employeeId,
    );
  }

  //TODO: refactor
  @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  removeDevice(
    @Args('deviceId', { type: () => Scalars.GraphQLBigInt }) deviceId: bigint,
  ): Promise<Boolean> {
    return this.deviceAuthService.removeDevice(deviceId);
  }
}
