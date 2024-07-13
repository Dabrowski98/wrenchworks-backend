import { Module } from '@nestjs/common';
import { WorkshopDetailsService } from './workshop-details.service';
import { WorkshopDetailsResolver } from './workshop-details.resolver';

@Module({
  providers: [WorkshopDetailsResolver, WorkshopDetailsService],
})
export class WorkshopDetailsModule {}
