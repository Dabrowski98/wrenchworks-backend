import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WorkshopJobCategoryService } from './workshop-job-category.service';
import { WorkshopJobCategory } from './entities/workshop-job-category.entity';
import { CreateWorkshopJobCategoryInput, UpdateWorkshopJobCategoryInput } from './dto';

@Resolver(() => WorkshopJobCategory)
export class WorkshopJobCategoryResolver {
  constructor(private readonly workshopJobCategoryService: WorkshopJobCategoryService) {}

  @Mutation(() => WorkshopJobCategory)
  async createWorkshopJobCategory(@Args('data') data: CreateWorkshopJobCategoryInput) {
    return this.workshopJobCategoryService.createWorkshopJobCategory(data);
  }

  @Mutation(() => WorkshopJobCategory)
  async updateWorkshopJobCategory(@Args('data') data: UpdateWorkshopJobCategoryInput) {
    return this.workshopJobCategoryService.updateWorkshopJobCategory(data);
  }

  @Query(() => [WorkshopJobCategory])
  async workshopJobCategories() {
    return this.workshopJobCategoryService.findAllWorkshopJobCategories();
  }

  @Query(() => WorkshopJobCategory, { nullable: true })
  async workshopJobCategory(
    @Args('workshopId', { type: () => BigInt }) workshopId: bigint,
    @Args('categoryId', { type: () => BigInt }) categoryId: bigint,
  ) {
    return this.workshopJobCategoryService.findWorkshopJobCategory(workshopId, categoryId);
  }

  @Mutation(() => WorkshopJobCategory)
  async deleteWorkshopJobCategory(
    @Args('workshopId', { type: () => BigInt }) workshopId: bigint,
    @Args('categoryId', { type: () => BigInt }) categoryId: bigint,
  ) {
    return this.workshopJobCategoryService.deleteWorkshopJobCategory(workshopId, categoryId);
  }
}
