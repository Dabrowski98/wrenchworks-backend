import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  DeleteOneUserArgs,
  FindFirstUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  User,
  UserCount,
  UserCreateInput,
  UserUpdateInput,
} from './dto';
import { Prisma, ServiceRequest } from '@prisma/client';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { Workshop } from '../workshop/dto';
import { SessionData } from '../session-data/dto';
import { Address } from '../address/dto';
import { Vehicle } from '../vehicle/dto';

import { Customer } from '../customer/dto';
import { Employee } from '../employee/dto';
import { JoinWorkshopRequest } from '../join-workshop-request/dto';
import { UserReport } from '../user-report/dto';
import { Review } from '../review/dto';
import { ReviewResponse } from '../review-response/dto';
import { PureAbility } from '@casl/ability';
import { accessibleBy } from '@casl/prisma';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(input: UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data: input });
  }

  async findOne(args: FindUniqueUserArgs): Promise<User> {
    const user = await this.prisma.user.findUnique(args);
    if (!user) throw new RecordNotFoundError(User);
    return user;
  }

  async findOneWithPassword(
    args: FindUniqueUserArgs,
  ): Promise<User & { password: string }> {
    const user = await this.prisma.user.findUnique(args);
    if (!user) throw new RecordNotFoundError(User);
    return user;
  }

  async findMany(args?: FindManyUserArgs): Promise<User[]> {
    return this.prisma.user.findMany(args || {});
  }

  async update(args: UpdateOneUserArgs): Promise<User> {
    return this.prisma.user.update(args);
  }

  async delete(args: DeleteOneUserArgs): Promise<Boolean> {
    return this.prisma.user
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async vehicles(ability: PureAbility, userId: bigint): Promise<Vehicle[]> {
    return await this.prisma.vehicle.findMany({
      where: {
        AND: [accessibleBy(ability).Vehicle, { userId }],
      },
    });
  }

  async serviceRequests(
    ability: PureAbility,
    userId: bigint,
  ): Promise<ServiceRequest[]> {
    return await this.prisma.serviceRequest.findMany({
      where: {
        AND: [accessibleBy(ability).ServiceRequest, { userId }],
      },
    });
  }

  async customers(ability: PureAbility, userId: bigint): Promise<Customer[]> {
    return await this.prisma.customer.findMany({
      where: {
        AND: [accessibleBy(ability).Customer, { userId }],
      },
    });
  }

  async employees(ability: PureAbility, userId: bigint): Promise<Employee[]> {
    return await this.prisma.employee.findMany({
      where: {
        AND: [accessibleBy(ability).Employee, { userId }],
      },
    });
  }

  async joinWorkshopRequests(
    ability: PureAbility,
    userId: bigint,
  ): Promise<JoinWorkshopRequest[]> {
    return await this.prisma.joinWorkshopRequest.findMany({
      where: {
        AND: [accessibleBy(ability).JoinWorkshopRequest, { user: { userId } }],
      },
    });
  }

  async userReports(
    ability: PureAbility,
    userId: bigint,
  ): Promise<UserReport[]> {
    return await this.prisma.userReport.findMany({
      where: {
        AND: [accessibleBy(ability).UserReport, { userId }],
      },
    });
  }

  async workshops(ability: PureAbility, userId: bigint): Promise<Workshop[]> {
    return await this.prisma.workshop.findMany({
      where: {
        AND: [accessibleBy(ability).Workshop, { user: { userId } }],
      },
    });
  }

  async reviews(ability: PureAbility, userId: bigint): Promise<Review[]> {
    return await this.prisma.review.findMany({
      where: {
        AND: [accessibleBy(ability).Review, { userId }],
      },
    });
  }

  async reviewResponses(
    ability: PureAbility,
    userId: bigint,
  ): Promise<ReviewResponse[]> {
    return await this.prisma.reviewResponse.findMany({
      where: {
        AND: [accessibleBy(ability).ReviewResponse, { userId }],
      },
    });
  }

  async sessionData(
    ability: PureAbility,
    userId: bigint,
  ): Promise<SessionData[]> {
    return await this.prisma.sessionData.findMany({
      where: {
        AND: [accessibleBy(ability).SessionData, { userId }],
      },
    });
  }

  async resolveCount(ability: PureAbility, userId: bigint): Promise<UserCount> {
    const counts = await this.prisma.$transaction([
      this.prisma.vehicle.count({
        where: { AND: [accessibleBy(ability).Vehicle, { userId }] },
      }),
      this.prisma.serviceRequest.count({
        where: { AND: [accessibleBy(ability).ServiceRequest, { userId }] },
      }),
      this.prisma.customer.count({
        where: { AND: [accessibleBy(ability).Customer, { userId }] },
      }),
      this.prisma.employee.count({
        where: { AND: [accessibleBy(ability).Employee, { userId }] },
      }),
      this.prisma.joinWorkshopRequest.count({
        where: {
          AND: [
            accessibleBy(ability).JoinWorkshopRequest,
            { user: { userId } },
          ],
        },
      }),
      this.prisma.userReport.count({
        where: { AND: [accessibleBy(ability).UserReport, { userId }] },
      }),
      this.prisma.workshop.count({
        where: { AND: [accessibleBy(ability).Workshop, { user: { userId } }] },
      }),
      this.prisma.review.count({
        where: { AND: [accessibleBy(ability).Review, { userId }] },
      }),
      this.prisma.reviewResponse.count({
        where: { AND: [accessibleBy(ability).ReviewResponse, { userId }] },
      }),
      this.prisma.sessionData.count({
        where: { AND: [accessibleBy(ability).SessionData, { userId }] },
      }),
    ]);

    const [
      vehicles,
      serviceRequests,
      customers,
      employees,
      joinWorkshopRequests,
      userReports,
      workshops,
      reviews,
      reviewResponses,
      sessionData,
    ] = counts;

    return {
      vehicles,
      serviceRequests,
      customers,
      employees,
      joinWorkshopRequests,
      userReports,
      workshops,
      reviews,
      reviewResponses,
      sessionData,
    };
  }
}
