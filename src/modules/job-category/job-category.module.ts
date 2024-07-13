import { Module } from '@nestjs/common';
import { JobCategoryService } from './job-category.service';
import { JobCategoryResolver } from './job-category.resolver';

@Module({
  providers: [JobCategoryService, JobCategoryResolver],
})
export class JobCategoryModule {}
