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
  DeleteManyUserReportArgs,
} from './dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../user/dto';
import { UserReportStatus } from '@prisma/client';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { Action } from '../ability';
import { AbilityFactory } from '../ability/ability.factory';
import { ForbiddenError, subject } from '@casl/ability';
import { UserReportReportedEntityType } from '../prisma';
import { Review } from '../review/dto/review.model';
import { ReviewResponse } from '../review-response/dto/review-response.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { accessibleBy } from '@casl/prisma';

@Injectable()
export class UserReportService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(
    currentUser: JwtUserPayload,
    args: CreateOneUserReportArgs,
  ): Promise<UserReport> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const user = await this.prisma.user.findUnique({
      where: { userId: args.data.user.connect.userId },
    });
    if (!user) throw new RecordNotFoundError(User);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('UserReport', { userId: user.userId } as any),
    );

    switch (args.data.reportedEntityType) {
      case UserReportReportedEntityType.USER:
        const reportedUser = await this.prisma.user.findUnique({
          where: { userId: args.data.reportedId },
        });
        if (!reportedUser) throw new RecordNotFoundError(User);
        break;
      case UserReportReportedEntityType.WORKSHOP:
        const reportedWorkshop = await this.prisma.workshop.findUnique({
          where: { workshopId: args.data.reportedId },
        });
        if (!reportedWorkshop) throw new RecordNotFoundError(Workshop);
        break;
      case UserReportReportedEntityType.REVIEW:
        const reportedReview = await this.prisma.review.findUnique({
          where: { reviewId: args.data.reportedId },
        });
        if (!reportedReview) throw new RecordNotFoundError(Review);
        break;
      case UserReportReportedEntityType.REVIEW_RESPONSE:
        const reportedReviewResponse =
          await this.prisma.reviewResponse.findUnique({
            where: { reviewResponseId: args.data.reportedId },
          });
        if (!reportedReviewResponse)
          throw new RecordNotFoundError(ReviewResponse);
        break;
      default:
        throw new BadRequestError('Invalid reported entity type');
    }
    return this.prisma.userReport.create({
      data: {
        ...args.data,
        reportedEntityType: args.data.reportedEntityType,
        reportedId: args.data.reportedId,
        user: { connect: { userId: user.userId } },
        createdAt: new Date(),
        status: UserReportStatus.PENDING,
      },
    });
  }

  async findOne(
    currentUser: JwtUserPayload,
    args: FindUniqueUserReportArgs,
  ): Promise<UserReport> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const userReport = await this.prisma.userReport.findFirst({
      where: { AND: [accessibleBy(ability).UserReport, args.where] },
    });
    if (!userReport) throw new RecordNotFoundError(UserReport);
    return userReport;
  }

  async findMany(
    currentUser: JwtUserPayload,
    args?: FindManyUserReportArgs,
  ): Promise<UserReport[]> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    return this.prisma.userReport.findMany({
      where: { AND: [accessibleBy(ability).UserReport, args.where || {}] },
    });
  }

  async update(
    currentUser: JwtUserPayload,
    args: UpdateOneUserReportArgs,
  ): Promise<UserReport> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const userReport = await this.prisma.userReport.findUnique({
      where: { reportId: args.where.reportId },
    });

    if (!userReport) throw new RecordNotFoundError(UserReport);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('UserReport', userReport),
    );

    return this.prisma.userReport.update({
      data: { ...args.data, updatedBy: currentUser.userId },
      where: args.where,
    });
  }

  async activate(
    currentUser: JwtUserPayload,
    userReportId: bigint,
  ): Promise<UserReport> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const userReport = await this.prisma.userReport.findUnique({
      where: { reportId: userReportId },
    });
    if (!userReport) throw new RecordNotFoundError(UserReport);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('UserReport', userReport),
    );

    if (userReport.status === UserReportStatus.CLOSED) {
      throw new BadRequestError('Cannot activate closed report');
    } else if (userReport.status === UserReportStatus.ACTIVE) {
      throw new BadRequestError('Report is already active');
    }

    return this.prisma.userReport.update({
      where: { reportId: userReportId },
      data: { status: UserReportStatus.ACTIVE },
    });
  }

  async close(
    currentUser: JwtUserPayload,
    userReportId: bigint,
  ): Promise<UserReport> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const userReport = await this.prisma.userReport.findUnique({
      where: { reportId: userReportId },
    });

    if (userReport.status === UserReportStatus.PENDING) {
      throw new BadRequestError('Cannot close pending report');
    } else if (userReport.status === UserReportStatus.ACTIVE) {
      throw new BadRequestError('Cannot close active report');
    }

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('UserReport', userReport),
    );

    return this.prisma.userReport.update({
      where: { reportId: userReportId },
      data: { status: UserReportStatus.CLOSED },
    });
  }

  async delete(
    currentUser: JwtUserPayload,
    args: DeleteOneUserReportArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const userReport = await this.prisma.userReport.findUnique({
      where: args.where,
    });
    if (!userReport) throw new RecordNotFoundError(UserReport);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('UserReport', userReport),
    );
    return await this.prisma.userReport
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  async deleteMany(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: DeleteManyUserReportArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const reports = await this.prisma.userReport.findMany({
      where: { AND: [accessibleBy(ability).UserReport, args.where] },
    });

    reports.forEach((report) => {
      ForbiddenError.from(ability).throwUnlessCan(
        Action.Delete,
        subject('UserReport', report),
      );
    });

    return this.prisma.userReport
      .deleteMany({
        where: { AND: [accessibleBy(ability).UserReport, args.where] },
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
