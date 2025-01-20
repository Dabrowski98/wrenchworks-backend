import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';
import { ServiceRequestResolver } from './service-request.resolver';
import { ServiceRequestService } from './service-request.service';

@Module({
  providers: [ServiceRequestResolver, ServiceRequestService],
  exports: [ServiceRequestService],
})
export class ServiceRequestModule {}
