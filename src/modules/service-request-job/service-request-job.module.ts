import { Module } from '@nestjs/common';
import { ServiceRequestJobService } from './service-request-job.service';
import { ServiceRequestJobResolver } from './service-request-job.resolver';

@Module({
  providers: [ServiceRequestJobResolver, ServiceRequestJobService],
})
export class ServiceRequestJobModule {}
