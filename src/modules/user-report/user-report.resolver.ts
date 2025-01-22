import { Args, Mutation, Parent, Query, ResolveField } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import {
  CreateOneUserReportArgs,
  DeleteOneUserReportArgs,
  FindManyUserReportArgs,
  FindUniqueUserReportArgs,
  UpdateOneUserReportArgs,
  UserReport,
} from './dto';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { User } from '../user/dto';
import { UserReportService } from './user-report.service';
import { Action, CheckAbilities } from '../ability';

@Resolver(() => UserReport)
export class UserReportResolver {
  constructor(private readonly userReportService: UserReportService) {}

  @Mutation(() => UserReport)
  async createUserReport(
    @Args() args: CreateOneUserReportArgs,
    @CurrentUserID() userId: bigint,
  ): Promise<UserReport> {
    return this.userReportService.create(args, userId);
  }

  @Query(() => UserReport)
  async userReport(
    @Args() args: FindUniqueUserReportArgs,
  ): Promise<UserReport> {
    return this.userReportService.findOne(args);
  }

  @Query(() => [UserReport])
  async userReports(
    @Args() args: FindManyUserReportArgs,
  ): Promise<UserReport[]> {
    return this.userReportService.findMany(args);
  }

  @Mutation(() => UserReport)
  async updateUserReport(
    @Args() args: UpdateOneUserReportArgs,
    @CurrentUserID() userId: bigint,
  ): Promise<UserReport> {
    return this.userReportService.update(args, userId);
  }

  // @CheckAbilities({ action: Action.Update, subject: UserReport })
  @Mutation(() => UserReport)
  async activateUserReport(
    @Args('userReportId') userReportId: bigint,
    @CurrentUserID() userId: bigint,
  ): Promise<UserReport> {
    return this.userReportService.activate(userReportId, userId);
  }

  // @CheckAbilities({ action: Action.Update, subject: UserReport })
  @Mutation(() => UserReport)
  async closeUserReport(
    @Args('userReportId') userReportId: bigint,
    @CurrentUserID() userId: bigint,
  ): Promise<UserReport> {
    return this.userReportService.close(userReportId, userId);
  }

  @Mutation(() => Boolean)
  async deleteUserReport(
    @Args() args: DeleteOneUserReportArgs,
    @CurrentUserID() userId: bigint,
  ): Promise<boolean> {
    return this.userReportService.delete(args);
  }

  // RESOLVE FIELDS

  // TODO: Resolve reported entity.

  @ResolveField(() => User)
  async user(@Parent() userReport: UserReport): Promise<User> {
    return this.userReportService.user(userReport.userId);
  }
}
