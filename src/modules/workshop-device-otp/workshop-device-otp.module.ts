import { PrismaModule } from 'src/database/prisma.module';
import { WorkshopDeviceOTPService } from './workshop-device-otp.service';
import { Module } from '@nestjs/common';
import { WorkshopDeviceOtpResolver } from './workshop-device-otp.resolver';

@Module({
  providers: [WorkshopDeviceOTPService, WorkshopDeviceOtpResolver],
  exports: [WorkshopDeviceOTPService],
})
export class WorkshopDeviceOTPModule {}
