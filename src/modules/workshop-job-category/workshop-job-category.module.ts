import { Module } from '@nestjs/common';
import { WorkshopJobCategoryService } from './workshop-job-category.service';
import { WorkshopJobCategoryResolver } from './workshop-job-category.resolver';

@Module({
  providers: [WorkshopJobCategoryResolver, WorkshopJobCategoryService],
})
export class WorkshopJobCategoryModule {}
