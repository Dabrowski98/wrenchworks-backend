import { Module } from '@nestjs/common';
import { ServiceRequestService } from './service-request.service';
import { ServiceRequestResolver } from './service-request.resolver';

@Module({
  providers: [ServiceRequestResolver, ServiceRequestService],
})
export class ServiceRequestModule {}
