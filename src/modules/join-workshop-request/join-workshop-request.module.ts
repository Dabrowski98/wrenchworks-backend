import { Module } from '@nestjs/common';
import { JoinWorkshopRequestService } from './join-workshop-request.service';
import { JoinWorkshopRequestResolver } from './join-workshop-request.resolver';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  providers: [JoinWorkshopRequestResolver, JoinWorkshopRequestService],
  exports: [JoinWorkshopRequestService],
})
export class JoinWorkshopRequestModule {}
