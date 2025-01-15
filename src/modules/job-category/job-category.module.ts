import { Module } from '@nestjs/common';
import { JobCategoryService } from './job-category.service';
import { JobCategoryResolver } from './job-category.resolver';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  providers: [JobCategoryResolver, JobCategoryService],
  exports: [JobCategoryService],
})
export class JobCategoryModule {} 