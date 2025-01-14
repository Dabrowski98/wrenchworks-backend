import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';
import { WorkshopDeviceService } from './workshop-device.service';

@Module({
  imports: [PrismaModule],
  providers: [WorkshopDeviceService],
  exports: [WorkshopDeviceService],
})
export class WorkshopDeviceModule {}