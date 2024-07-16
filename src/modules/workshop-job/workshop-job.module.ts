import { Module } from '@nestjs/common';
import { WorkshopJobService } from './workshop-job.service';
import { WorkshopJobResolver } from './workshop-job.resolver';

@Module({
  providers: [WorkshopJobResolver, WorkshopJobService],
})
export class WorkshopJobModule {}
