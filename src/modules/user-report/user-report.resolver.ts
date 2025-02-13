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
import { UserJwtAuthGuard } from '../auth/user-auth/guards/user-jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';

@Resolver(() => UserReport)
export class UserReportResolver {
  constructor(private readonly userReportService: UserReportService) {}

  // ADMIN, USER
  @CheckAbilities({ action: Action.Create, subject: 'UserReport' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => UserReport)
  async createUserReport(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: CreateOneUserReportArgs,
  ): Promise<UserReport> {
    return this.userReportService.create(currentUser, args);
  }

  // ADMIN, USER who created the report
  @CheckAbilities({ action: Action.Read, subject: 'UserReport' })
  @UseGuards(UserJwtAuthGuard)
  @Query(() => UserReport)
  async userReport(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: FindUniqueUserReportArgs,
  ): Promise<UserReport> {
    return this.userReportService.findOne(currentUser, args);
  }

  // ADMIN, USER who created the report
  @CheckAbilities({ action: Action.Read, subject: 'UserReport' })
  @UseGuards(UserJwtAuthGuard)
  @Query(() => [UserReport])
  async userReports(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: FindManyUserReportArgs,
  ): Promise<UserReport[]> {
    return this.userReportService.findMany(currentUser, args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Moderate, subject: 'UserReport' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => UserReport)
  async updateUserReport(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: UpdateOneUserReportArgs,
  ): Promise<UserReport> {
    return this.userReportService.update(currentUser, args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Moderate, subject: 'UserReport' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => UserReport)
  async activateUserReport(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args('userReportId') userReportId: bigint,
  ): Promise<UserReport> {
    return this.userReportService.activate(currentUser, userReportId);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Moderate, subject: 'UserReport' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => UserReport)
  async closeUserReport(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args('userReportId') userReportId: bigint,
  ): Promise<UserReport> {
    return this.userReportService.close(currentUser, userReportId);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Delete, subject: 'UserReport' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteUserReport(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: DeleteOneUserReportArgs,
  ): Promise<boolean> {
    return this.userReportService.delete(currentUser, args);
  }

  // RESOLVE FIELDS

  @CheckAbilities({ action: Action.Read, subject: 'User' })
  @ResolveField(() => User)
  async user(@Parent() userReport: UserReport): Promise<User> {
    return this.userReportService.user(userReport.userId);
  }
}
