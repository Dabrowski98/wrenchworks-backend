import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JobCategory } from './entities/job-category.entity';
import { JobCategoryService } from './job-category.service';
import { CreateJobCategoryInput, UpdateJobCategoryInput } from './dto';

@Resolver(() => JobCategory)
export class JobCategoryResolver {
  constructor(private readonly jobCategoryService: JobCategoryService) {}

  @Mutation(() => JobCategory)
  async createJobCategory(@Args('data') data: CreateJobCategoryInput) {
    return this.jobCategoryService.createJobCategory(data);
  }

  @Mutation(() => JobCategory)
  async updateJobCategory(
    @Args('id', { type: () => BigInt }) id: bigint,
    @Args('data') data: UpdateJobCategoryInput,
  ) {
    return this.jobCategoryService.updateJobCategory(id, data);
  }

  @Mutation(() => JobCategory)
  async deleteJobCategory(@Args('id', { type: () => BigInt }) id: bigint) {
    return this.jobCategoryService.deleteJobCategory(id);
  }

  @Query(() => [JobCategory])
  async jobCategories() {
    return this.jobCategoryService.findAllJobCategories();
  }

  @Query(() => JobCategory, { nullable: true })
  async jobCategory(@Args('id', { type: () => BigInt }) id: bigint) {
    return this.jobCategoryService.findOneJobCategory(id);
  }
}
