import { Module } from '@nestjs/common';
import { WorkshopDetailsService } from './workshop-details.service';
import { WorkshopDetailsResolver } from './workshop-details.resolver';

@Module({
  providers: [WorkshopDetailsService, WorkshopDetailsResolver],
  exports: [WorkshopDetailsService],
})
export class WorkshopDetailsModule {}
