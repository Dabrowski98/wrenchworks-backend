import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobResolver } from './job.resolver';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  providers: [JobResolver, JobService],
  exports: [JobService],
})
export class JobModule {} 