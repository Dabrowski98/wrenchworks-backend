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
import { Vehicle } from '../vehicle';

import { DeletePayload } from 'src/common/payloads/delete.payload';
import { Customer } from '../customer/dto';
import { Employee } from '../employee/dto';
import { JoinWorkshopRequest } from '../join-workshop-request/dto';
import { UserReport } from '../user-report';
import { Review } from '../review/dto';
import { ReviewResponse } from '../review-response/dto';

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

  async findMany(args: FindManyUserArgs): Promise<User[]> {
    return this.prisma.user.findMany(args);
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
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

  async address(userId: bigint): Promise<Address> {
    return (
      await this.prisma.user.findUnique({
        where: { userId },
        include: { address: true },
      })
    ).address;
  }

  async vehicles(userId: bigint): Promise<Vehicle[]> {
    return (
      await this.prisma.user.findUnique({
        where: { userId },
        include: { vehicles: true },
      })
    ).vehicles;
  }

  async serviceRequests(userId: bigint): Promise<ServiceRequest[]> {
    return (
      await this.prisma.user.findUnique({
        where: { userId },
        include: { serviceRequests: true },
      })
    ).serviceRequests;
  }

  async customers(userId: bigint): Promise<Customer[]> {
    return (
      await this.prisma.user.findUnique({
        where: { userId },
        include: { customers: true },
      })
    ).customers;
  }

  async employees(userId: bigint): Promise<Employee[]> {
    return (
      await this.prisma.user.findUnique({
        where: { userId },
        include: { employees: true },
      })
    ).employees;
  }

  async joinWorkshopRequests(userId: bigint): Promise<JoinWorkshopRequest[]> {
    return (
      await this.prisma.user.findUnique({
        where: { userId },
        include: { joinWorkshopRequests: true },
      })
    ).joinWorkshopRequests;
  }

  async userReports(userId: bigint): Promise<UserReport[]> {
    return (
      await this.prisma.user.findUnique({
        where: { userId },
        include: { userReports: true },
      })
    ).userReports;
  }

  async workshops(userId: bigint): Promise<Workshop[]> {
    return (
      await this.prisma.user.findUnique({
        where: { userId },
        include: { workshops: true },
      })
    ).workshops;
  }

  async reviews(userId: bigint): Promise<Review[]> {
    return (
      await this.prisma.user.findUnique({
        where: { userId },
        include: { reviews: true },
      })
    ).reviews;
  }

  async reviewResponses(userId: bigint): Promise<ReviewResponse[]> {
    return (
      await this.prisma.user.findUnique({
        where: { userId },
        include: { reviewResponses: true },
      })
    ).reviewResponses;
  }

  async sessionData(userId: bigint): Promise<SessionData[]> {
    return (
      await this.prisma.user.findUnique({
        where: { userId },
        include: { sessionData: true },
      })
    ).sessionData;
  }

  async resolveCount(userId: bigint): Promise<UserCount> {
    return {
      vehicles: await this.prisma.vehicle.count({where: {userId}}),
      serviceRequests: await this.prisma.serviceRequest.count({where: {userId}}),
      customers: await this.prisma.customer.count({where: {userId}}),
      employees: await this.prisma.employee.count({where: {userId}}),
      joinWorkshopRequests: await this.prisma.joinWorkshopRequest.count({where: {user: {userId}}}),
      userReports: await this.prisma.userReport.count({where: {userId}}),
      workshops: await this.prisma.workshop.count({where: {user: {userId}}}),
      reviews: await this.prisma.review.count({where: {user: {userId}}}),
      reviewResponses: await this.prisma.reviewResponse.count({where: {user: {userId}}}),
      sessionData: await this.prisma.sessionData.count({where: {user: {userId}}}),
    };
  }
}
