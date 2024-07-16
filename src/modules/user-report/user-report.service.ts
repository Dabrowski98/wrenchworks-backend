import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserReportInput, UpdateUserReportInput } from './dto/index';

@Injectable()
export class UserReportService {
  constructor(private databaseService: DatabaseService) {}

  async createUserReport(data: CreateUserReportInput) {
    return this.databaseService.userReport.create({
      data: {
        userId: data.userId,
        reportText: data.reportText,
        reportedType: data.reportedType,
        reportedId: data.reportedId,
      },
    });
  }

  async updateUserReport(data: UpdateUserReportInput) {
    return this.databaseService.userReport.update({
      where: {
        reportId: data.reportId,
      },
      data: {
        reportText: data.reportText,
        reportedType: data.reportedType,
        reportedId: data.reportedId,
        status: data.status,
        updatedAt: data.updatedAt,
      },
    });
  }

  async findAllUserReports() {
    return this.databaseService.userReport.findMany();
  }

  async findUserReportById(reportId: bigint) {
    return this.databaseService.userReport.findUnique({
      where: {
        reportId,
      },
    });
  }

  async deleteUserReport(reportId: bigint) {
    return this.databaseService.userReport.delete({
      where: {
        reportId,
      },
    });
  }
}
