import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import {
  CreateOneJobCategoryArgs,
  DeleteOneJobCategoryArgs,
  FindManyJobCategoryArgs,
  FindUniqueJobCategoryArgs,
  UpdateOneJobCategoryArgs,
  JobCategory,
  JobCategoryCount,
} from './dto';
import { UseGuards } from '@nestjs/common';
import { JobCategoryService } from './job-category.service';
import { Job } from '../job/dto/job.model';
import { Workshop } from '../workshop/dto/workshop.model';

// TODO: Moderator and above.

@Resolver(() => JobCategory)
export class JobCategoryResolver {
  constructor(private readonly jobCategoryService: JobCategoryService) {}

  @Mutation(() => JobCategory)
  async createJobCategory(@Args() args: CreateOneJobCategoryArgs): Promise<JobCategory> {
    return this.jobCategoryService.create(args);
  }

  @Query(() => JobCategory)
  async jobCategory(
    @Args('categoryId', { type: () => GraphQLBigInt }) categoryId: bigint,
  ): Promise<JobCategory> {
    return this.jobCategoryService.findOne({ where: { categoryId } });
  }

  @Query(() => [JobCategory])
  async jobCategories(@Args() args: FindManyJobCategoryArgs): Promise<JobCategory[]> {
    return this.jobCategoryService.findMany(args);
  }

  @Mutation(() => JobCategory)
  async updateJobCategory(@Args() args: UpdateOneJobCategoryArgs): Promise<JobCategory> {
    return this.jobCategoryService.update(args);
  }

  @Mutation(() => Boolean)
  async deleteJobCategory(@Args() args: DeleteOneJobCategoryArgs): Promise<boolean> {
    return this.jobCategoryService.delete(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => JobCategory, { nullable: true })
  parent(@Parent() jobCategory: JobCategory): Promise<JobCategory | null> {
    return this.jobCategoryService.parent(jobCategory.categoryId);
  }

  @ResolveField(() => [JobCategory], { nullable: true })
  children(@Parent() jobCategory: JobCategory): Promise<JobCategory[]> {
    return this.jobCategoryService.children(jobCategory.categoryId);
  }

  @ResolveField(() => [Job], { nullable: true })
  jobs(@Parent() jobCategory: JobCategory): Promise<Job[]> {
    return this.jobCategoryService.jobs(jobCategory.categoryId);
  }

  @ResolveField(() => [Workshop], { nullable: true })
  workshops(@Parent() jobCategory: JobCategory): Promise<Workshop[]> {
    return this.jobCategoryService.workshops(jobCategory.categoryId);
  }

  @ResolveField(() => JobCategoryCount)
  async _count(@Parent() jobCategory: JobCategory): Promise<JobCategoryCount> {
    return this.jobCategoryService.resolveCount(jobCategory.categoryId);
  }
} 