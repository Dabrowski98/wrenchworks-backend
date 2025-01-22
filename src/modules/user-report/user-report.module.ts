import { Module } from '@nestjs/common';
import { UserReportService } from './user-report.service';
import { UserReportResolver } from './user-report.resolver';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  providers: [UserReportResolver, UserReportService],
  exports: [UserReportService],
})
export class UserReportModule {}
