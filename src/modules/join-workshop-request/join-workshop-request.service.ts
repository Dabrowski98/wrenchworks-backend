import { Injectable } from '@nestjs/common';
import {
  CreateOneJoinWorkshopRequestArgs,
  UpdateOneJoinWorkshopRequestArgs,
  DeleteOneJoinWorkshopRequestArgs,
  FindUniqueJoinWorkshopRequestArgs,
  FindManyJoinWorkshopRequestArgs,
  JoinWorkshopRequest,
} from './dto';
import { PrismaService } from 'src/database/prisma.service';
import { Employee } from '../employee/dto/employee.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { User } from '../user/dto/user.model';
import {
  ForbiddenError,
  RecordNotFoundError,
} from 'src/common/custom-errors/errors.config';
import { JoinWorkshopRequestStatus } from '@prisma/client';

@Injectable()
export class JoinWorkshopRequestService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    args: CreateOneJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest> {
    return this.prisma.joinWorkshopRequest.create({
      data: { ...args.data, status: JoinWorkshopRequestStatus.PENDING },
    });
  }

  async findOne(
    args: FindUniqueJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest> {
    const request = await this.prisma.joinWorkshopRequest.findUnique(args);
    if (!request) throw new RecordNotFoundError(JoinWorkshopRequest);
    return request;
  }

  async findMany(
    args: FindManyJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest[]> {
    return this.prisma.joinWorkshopRequest.findMany(args);
  }

  async accept(
    joinWorkshopRequestId: bigint,
    userId: bigint,
  ): Promise<boolean> {
    const request = await this.prisma.joinWorkshopRequest.findUnique({
      where: { joinWorkshopRequestId },
    });
    if (!request) throw new RecordNotFoundError(JoinWorkshopRequest);
    if (request.receiverId !== userId)
      throw new ForbiddenError('You are not allowed to accept this request');

    return !!this.prisma.joinWorkshopRequest.update({
      where: { joinWorkshopRequestId },
      data: { status: JoinWorkshopRequestStatus.ACCEPTED },
    });
  }

  async reject(
    joinWorkshopRequestId: bigint,
    userId: bigint,
  ): Promise<boolean> {
    const request = await this.prisma.joinWorkshopRequest.findUnique({
      where: { joinWorkshopRequestId },
    });
    if (!request) throw new RecordNotFoundError(JoinWorkshopRequest);
    if (request.receiverId !== userId)
      throw new ForbiddenError('You are not allowed to reject this request');

    return !!this.prisma.joinWorkshopRequest.update({
      where: { joinWorkshopRequestId },
      data: { status: JoinWorkshopRequestStatus.REJECTED },
    });
  }

  async update(
    args: UpdateOneJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest> {
    return this.prisma.joinWorkshopRequest.update(args);
  }

  async delete(args: DeleteOneJoinWorkshopRequestArgs): Promise<boolean> {
    await this.prisma.joinWorkshopRequest.delete(args);
    return true;
  }

  // RESOLVE METHODS

  async employee(joinWorkshopRequestId: bigint): Promise<Employee | null> {
    return (
      await this.prisma.joinWorkshopRequest.findUnique({
        where: { joinWorkshopRequestId },
        include: { employee: true },
      })
    ).employee;
  }

  async workshop(joinWorkshopRequestId: bigint): Promise<Workshop | null> {
    return (
      await this.prisma.joinWorkshopRequest.findUnique({
        where: { joinWorkshopRequestId },
        include: { workshop: true },
      })
    ).workshop;
  }

  async user(joinWorkshopRequestId: bigint): Promise<User | null> {
    return (
      await this.prisma.joinWorkshopRequest.findUnique({
        where: { joinWorkshopRequestId },
        include: { user: true },
      })
    ).user;
  }
}
