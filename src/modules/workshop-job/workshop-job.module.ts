import { Module } from '@nestjs/common';
import { WorkshopJobService } from './workshop-job.service';
import { WorkshopJobResolver } from './workshop-job.resolver';

@Module({
  providers: [WorkshopJobService, WorkshopJobResolver],
  exports: [WorkshopJobService],
})
export class WorkshopJobModule {}
