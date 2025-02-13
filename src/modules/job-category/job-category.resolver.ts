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
import { Action, CheckAbilities } from '../ability';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';

@Resolver(() => JobCategory)
export class JobCategoryResolver {
  constructor(private readonly jobCategoryService: JobCategoryService) {}

  // ADMIN
  @CheckAbilities({ action: Action.Create, subject: 'JobCategory' })
  @Mutation(() => JobCategory)
  createJobCategory(
    @Args() args: CreateOneJobCategoryArgs,
  ): Promise<JobCategory> {
    return this.jobCategoryService.create(args);
  }

  // PUBLIC
  @Public()
  @Query(() => JobCategory)
  jobCategory(@Args() args: FindUniqueJobCategoryArgs): Promise<JobCategory> {
    return this.jobCategoryService.findOne(args);
  }

  // PUBLIC
  @Public()
  @Query(() => [JobCategory])
  jobCategories(@Args() args?: FindManyJobCategoryArgs): Promise<JobCategory[]> {
    return this.jobCategoryService.findMany(args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Update, subject: 'JobCategory' })
  @Mutation(() => JobCategory)
  updateJobCategory(
    @Args() args: UpdateOneJobCategoryArgs,
  ): Promise<JobCategory> {
    return this.jobCategoryService.update(args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Delete, subject: 'JobCategory' })
  @Mutation(() => Boolean)
  deleteJobCategory(@Args() args: DeleteOneJobCategoryArgs): Promise<boolean> {
    return this.jobCategoryService.delete(args);
  }

  // RESOLVE FIELDS

  @CheckAbilities({ action: Action.Read, subject: 'JobCategory' })
  @ResolveField(() => JobCategory, { nullable: true })
  parent(@Parent() jobCategory: JobCategory): Promise<JobCategory | null> {
    return this.jobCategoryService.parent(jobCategory.categoryId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'JobCategory' })
  @ResolveField(() => [JobCategory], { nullable: true })
  children(@Parent() jobCategory: JobCategory): Promise<JobCategory[]> {
    return this.jobCategoryService.children(jobCategory.categoryId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Job' })
  @ResolveField(() => [Job])
  jobs(@Parent() jobCategory: JobCategory): Promise<Job[]> {
    return this.jobCategoryService.jobs(jobCategory.categoryId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Workshop' })
  @ResolveField(() => [Workshop], { nullable: true })
  workshops(@Parent() jobCategory: JobCategory): Promise<Workshop[]> {
    return this.jobCategoryService.workshops(jobCategory.categoryId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'JobCategory' })
  @ResolveField(() => JobCategoryCount)
  _count(@Parent() jobCategory: JobCategory): Promise<JobCategoryCount> {
    return this.jobCategoryService.resolveCount(jobCategory.categoryId);
  }
}
