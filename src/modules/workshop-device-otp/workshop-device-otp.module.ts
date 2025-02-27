import { PrismaModule } from 'src/database/prisma.module';
import { WorkshopDeviceOTPService } from './workshop-device-otp.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [WorkshopDeviceOTPService],
  exports: [WorkshopDeviceOTPService],
})
export class WorkshopDeviceOTPModule {}
