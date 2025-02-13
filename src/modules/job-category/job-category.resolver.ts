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
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';
import { PureAbility } from '@casl/ability';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards';

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
  @CheckAbilities({ action: Action.Read, subject: 'JobCategory' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => JobCategory)
  jobCategory(@Args() args: FindUniqueJobCategoryArgs): Promise<JobCategory> {
    return this.jobCategoryService.findOne(args);
  }

  // PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'JobCategory' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [JobCategory])
  jobCategories(
    @Args() args?: FindManyJobCategoryArgs,
  ): Promise<JobCategory[]> {
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

  @ResolveField(() => JobCategory, { nullable: true })
  parent(
    @CurrentAbility() ability: PureAbility,
    @Parent() jobCategory: JobCategory,
  ): Promise<JobCategory | null> {
    return this.jobCategoryService.parent(ability, jobCategory.categoryId);
  }

  @ResolveField(() => [JobCategory], { nullable: true })
  children(
    @CurrentAbility() ability: PureAbility,
    @Parent() jobCategory: JobCategory,
  ): Promise<JobCategory[]> {
    return this.jobCategoryService.children(ability, jobCategory.categoryId);
  }

  @ResolveField(() => [Job], { nullable: true })
  jobs(
    @CurrentAbility() ability: PureAbility,
    @Parent() jobCategory: JobCategory,
  ): Promise<Job[]> {
    return this.jobCategoryService.jobs(ability, jobCategory.categoryId);
  }

  @ResolveField(() => [Workshop], { nullable: true })
  workshops(
    @CurrentAbility() ability: PureAbility,
    @Parent() jobCategory: JobCategory,
  ): Promise<Workshop[]> {
    return this.jobCategoryService.workshops(ability, jobCategory.categoryId);
  }

  @ResolveField(() => JobCategoryCount, { nullable: true })
  _count(
    @CurrentAbility() ability: PureAbility,
    @Parent() jobCategory: JobCategory,
  ): Promise<JobCategoryCount> {
    return this.jobCategoryService.resolveCount(
      ability,
      jobCategory.categoryId,
    );
  }
}
