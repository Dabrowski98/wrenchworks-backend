import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { WorkshopDeviceOTPService } from './workshop-device-otp.service';
import { WorkshopDeviceOtp } from './dto/workshop-device-otp.model';
import { CreateOneWorkshopDeviceOtpArgs } from './dto/create-one-workshop-device-otp.args';
import { FindUniqueWorkshopDeviceOtpArgs } from './dto/find-unique-workshop-device-otp.args';
import { FindManyWorkshopDeviceOtpArgs } from './dto/find-many-workshop-device-otp.args';
import { UpdateOneWorkshopDeviceOtpArgs } from './dto/update-one-workshop-device-otp.args';
import { DeleteOneWorkshopDeviceOtpArgs } from './dto/delete-one-workshop-device-otp.args';
import { UseGuards } from '@nestjs/common';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards/employee-jwt-auth.guard';
import { Workshop } from '../workshop/dto/workshop.model';

@Resolver(() => WorkshopDeviceOtp)
export class WorkshopDeviceOtpResolver {
  constructor(private readonly workshopDeviceOTPService: WorkshopDeviceOTPService) {}

  @ResolveField(() => Workshop)
  workshop(@Parent() workshopDeviceOtp: WorkshopDeviceOtp) {
    return this.workshopDeviceOTPService.workshop(workshopDeviceOtp.WorkshopDeviceOtpId);
  }
} 