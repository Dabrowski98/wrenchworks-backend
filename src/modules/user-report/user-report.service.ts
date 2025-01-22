import { PrismaService } from 'src/database/prisma.service';
import { Employee } from '../employee/dto/employee.model';
import { Service } from '../service/dto/service.model';
import {
  BadRequestError,
  RecordNotFoundError,
} from 'src/common/custom-errors/errors.config';
import {
  CreateOneUserReportArgs,
  FindUniqueUserReportArgs,
  FindManyUserReportArgs,
  DeleteOneUserReportArgs,
  UpdateOneUserReportArgs,
  UserReport,
} from './dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../user/dto';
import { UserReportStatus } from '@prisma/client';

@Injectable()
export class UserReportService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    args: CreateOneUserReportArgs,
    userId: bigint,
  ): Promise<UserReport> {
    return this.prisma.userReport.create({
      data: {
        ...args.data,
        user: { connect: { userId } },
        createdAt: new Date(),
        status: UserReportStatus.PENDING,
      },
    });
  }

  async findOne(args: FindUniqueUserReportArgs): Promise<UserReport> {
    const userReport = await this.prisma.userReport.findUnique(args);
    if (!userReport) throw new RecordNotFoundError(UserReport);
    return userReport;
  }

  async findMany(args: FindManyUserReportArgs): Promise<UserReport[]> {
    return this.prisma.userReport.findMany(args);
  }

  async update(
    args: UpdateOneUserReportArgs,
    userId: bigint,
  ): Promise<UserReport> {
    return this.prisma.userReport.update({
      data: { ...args.data, updatedBy: userId },
      where: args.where,
    });
  }

  async activate(userReportId: bigint, userId: bigint): Promise<UserReport> {
    const userReport = await this.prisma.userReport.findUnique({
      where: { reportId: userReportId },
    });

    if (userReport.status === UserReportStatus.CLOSED) {
      throw new BadRequestError('Cannot activate closed report');
    }

    return this.update(
      {
        where: { reportId: userReportId },
        data: { status: UserReportStatus.ACTIVE },
      },
      userId
    );
  }

  async close(userReportId: bigint, userId: bigint): Promise<UserReport> {
    const userReport = await this.prisma.userReport.findUnique({
      where: { reportId: userReportId },
    });

    if (userReport.status === UserReportStatus.PENDING) {
      throw new BadRequestError('Cannot close pending report');
    }

    return this.update(
      {
        where: { reportId: userReportId },
        data: { status: UserReportStatus.CLOSED },
      },
      userId,
    );
  }

  async delete(args: DeleteOneUserReportArgs): Promise<boolean> {
    return await this.prisma.userReport
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async user(reportId: bigint): Promise<User | null> {
    return (
      await this.prisma.userReport.findUnique({
        where: { reportId },
        include: { user: true },
      })
    ).user;
  }
}
