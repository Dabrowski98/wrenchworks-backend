import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  FindFirstUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  User,
  UserCount,
  UserCreateInput,
  UserUpdateInput,
} from './dto';
import { Prisma } from '@prisma/client';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { Workshop } from '../workshop/dto';
import { SessionData } from '../session-data/dto';
import { Address } from '../address/dto';
import { Vehicle } from '../vehicle';
import { ServiceRequest } from '../service-request';
import { Customer } from '../customer';
import { Employee } from '../employee/dto';
import { JoinWorkshopRequest } from '../join-workshop-request';
import { UserReport } from '../user-report';
import { ReviewResponse } from '../review-response';
import { Review } from '../review';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(input: UserCreateInput) {
    return this.prisma.user.create({ data: input });
  }

  async findUser(input: FindUniqueUserArgs) {
    const user = await this.prisma.user.findUnique(input);

    if (!user) throw new RecordNotFoundError(User);

    return user;
  }

  async findUsers(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args);
  }

  async findAllUsers() {
    return this.prisma.user.findMany({ where: { userId: { not: undefined } } });
  }

  async updateUser(userId: bigint, data: UserUpdateInput) {
    return this.prisma.user.update({
      where: { userId },
      data,
    });
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
      vehicles: (await this.vehicles(userId)).length,
      serviceRequests: (await this.serviceRequests(userId)).length,
      customers: (await this.customers(userId)).length,
      employees: (await this.employees(userId)).length,
      joinWorkshopRequests: (await this.joinWorkshopRequests(userId)).length,
      userReports: (await this.userReports(userId)).length,
      workshops: (await this.workshops(userId)).length,
      reviews: (await this.reviews(userId)).length,
      reviewResponses: (await this.reviewResponses(userId)).length,
      sessionData: (await this.sessionData(userId)).length,
    };
  }
}
