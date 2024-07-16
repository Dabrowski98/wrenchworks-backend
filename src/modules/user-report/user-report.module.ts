import { Module } from '@nestjs/common';
import { UserReportService } from './user-report.service';
import { UserReportResolver } from './user-report.resolver';

@Module({
  providers: [UserReportResolver, UserReportService],
})
export class UserReportModule {}
