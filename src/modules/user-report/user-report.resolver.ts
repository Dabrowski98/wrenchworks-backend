import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserReport } from './entities/user-report.entity';
import { UserReportService } from './user-report.service';
import { CreateUserReportInput, UpdateUserReportInput } from './dto/index';

@Resolver(() => UserReport)
export class UserReportResolver {
  constructor(private readonly userReportService: UserReportService) {}

  @Mutation(() => UserReport)
  async createUserReport(@Args('data') data: CreateUserReportInput) {
    return this.userReportService.createUserReport(data);
  }

  @Mutation(() => UserReport)
  async updateUserReport(@Args('data') data: UpdateUserReportInput) {
    return this.userReportService.updateUserReport(data);
  }

  @Query(() => [UserReport])
  async userReports() {
    return this.userReportService.findAllUserReports();
  }

  @Query(() => UserReport, { nullable: true })
  async userReport(@Args('reportId', { type: () => BigInt }) reportId: bigint) {
    return this.userReportService.findUserReportById(reportId);
  }

  @Mutation(() => UserReport)
  async deleteUserReport(@Args('reportId', { type: () => BigInt }) reportId: bigint) {
    return this.userReportService.deleteUserReport(reportId);
  }
}
