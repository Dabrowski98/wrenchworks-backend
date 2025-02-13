import { Injectable } from '@nestjs/common';
import {
  CreateOneJoinWorkshopRequestArgs,
  UpdateOneJoinWorkshopRequestArgs,
  DeleteOneJoinWorkshopRequestArgs,
  FindUniqueJoinWorkshopRequestArgs,
  FindManyJoinWorkshopRequestArgs,
  JoinWorkshopRequest,
  DeleteManyJoinWorkshopRequestArgs,
} from './dto';
import { PrismaService } from 'src/database/prisma.service';
import { Employee } from '../employee/dto/employee.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { User } from '../user/dto/user.model';
import {
  BadRequestError,
  CustomForbiddenError,
  RecordNotFoundError,
} from 'src/common/custom-errors/errors.config';
import { JoinWorkshopRequestStatus } from '@prisma/client';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { AbilityFactory, accessibleBy, Action } from '../ability';
import { ForbiddenError, subject } from '@casl/ability';

@Injectable()
export class JoinWorkshopRequestService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: CreateOneJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const workshop = await this.prisma.workshop.findUnique({
      where: { workshopId: args.data.workshop.connect.workshopId },
      select: { workshopId: true, ownerId: true },
    });

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('JoinWorkshopRequest', { workshop } as any),
    );

    const employee = await this.prisma.employee.findFirst({
      where: {
        AND: {
          workshopId: workshop.workshopId,
          userId: args.data.user.connect.userId,
        },
      },
    });
    if (employee)
      throw new CustomForbiddenError(
        'User is already an employee of the workshop',
      );

    const oldRequest = await this.prisma.joinWorkshopRequest.findFirst({
      where: {
        employeeId: args.data.employee.connect.employeeId,
        receiverId: args.data.user.connect.userId,
      },
    });

    if (oldRequest)
      await this.prisma.joinWorkshopRequest.delete({
        where: { joinWorkshopRequestId: oldRequest.joinWorkshopRequestId },
      });

    return this.prisma.joinWorkshopRequest.create({
      data: { ...args.data, status: JoinWorkshopRequestStatus.PENDING },
    });
  }

  async findOne(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: FindUniqueJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const request = await this.prisma.joinWorkshopRequest.findFirst({
      where: { AND: [accessibleBy(ability).JoinWorkshopRequest, args.where] },
    });
    if (!request) throw new RecordNotFoundError(JoinWorkshopRequest);
    return request;
  }

  async findMany(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args?: FindManyJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest[]> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    return this.prisma.joinWorkshopRequest.findMany({
      where: {
        AND: [accessibleBy(ability).JoinWorkshopRequest, args?.where || {}],
      },
      ...args,
    });
  }

  async accept(
    currentUser: JwtUserPayload,
    joinWorkshopRequestId: bigint,
  ): Promise<boolean> {
    const request = await this.prisma.joinWorkshopRequest.findUnique({
      where: { joinWorkshopRequestId },
      include: {
        workshop: { select: { workshopId: true, ownerId: true } },
      },
    });
    if (!request) throw new RecordNotFoundError(JoinWorkshopRequest);
    const ability = await this.abilityFactory.defineAbility(currentUser);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Resolve,
      subject('JoinWorkshopRequest', request),
    );

    const employee = await this.prisma.employee.findFirst({
      where: {
        AND: {
          workshopId: request.workshopId,
          userId: request.receiverId,
        },
      },
    });
    if (employee)
      throw new CustomForbiddenError(
        'User is already an employee of the workshop',
      );

    await this.prisma.user.update({
      where: { userId: request.receiverId },
      data: {
        employees: { connect: { employeeId: request.employeeId } },
      },
    });

    return !!this.prisma.joinWorkshopRequest.update({
      where: { joinWorkshopRequestId },
      data: { status: JoinWorkshopRequestStatus.ACCEPTED },
    });
  }

  async reject(
    currentUser: JwtUserPayload,
    joinWorkshopRequestId: bigint,
  ): Promise<boolean> {
    const request = await this.prisma.joinWorkshopRequest.findUnique({
      where: { joinWorkshopRequestId },
      include: {
        workshop: { select: { workshopId: true, ownerId: true } },
      },
    });
    if (!request) throw new RecordNotFoundError(JoinWorkshopRequest);
    const ability = await this.abilityFactory.defineAbility(currentUser);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Resolve,
      subject('JoinWorkshopRequest', request),
    );

    return !!this.prisma.joinWorkshopRequest.update({
      where: { joinWorkshopRequestId },
      data: { status: JoinWorkshopRequestStatus.REJECTED },
    });
  }

  async update(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: UpdateOneJoinWorkshopRequestArgs,
  ): Promise<JoinWorkshopRequest> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const request = await this.prisma.joinWorkshopRequest.findUnique({
      where: args.where,
      include: {
        workshop: { select: { workshopId: true, ownerId: true } },
      },
    });
    if (!request) throw new RecordNotFoundError(JoinWorkshopRequest);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('JoinWorkshopRequest', request),
    );

    return this.prisma.joinWorkshopRequest.update(args);
  }

  async delete(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: DeleteOneJoinWorkshopRequestArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const request = await this.prisma.joinWorkshopRequest.findUnique({
      where: args.where,
      include: {
        workshop: { select: { workshopId: true, ownerId: true } },
      },
    });
    if (!request) throw new RecordNotFoundError(JoinWorkshopRequest);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('JoinWorkshopRequest', request),
    );

    return !!this.prisma.joinWorkshopRequest.delete({
      where: args.where,
    });
  }

  async deleteMany(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: DeleteManyJoinWorkshopRequestArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const requests = await this.prisma.joinWorkshopRequest.findMany({
      where: { AND: [accessibleBy(ability).JoinWorkshopRequest, args.where] },
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });

    requests.forEach((request) => {
      ForbiddenError.from(ability).throwUnlessCan(
        Action.Delete,
        subject('JoinWorkshopRequest', request),
      );
    });

    return this.prisma.joinWorkshopRequest
      .deleteMany({
        where: { AND: [accessibleBy(ability).JoinWorkshopRequest, args.where] },
      })
      .then(() => true)
      .catch(() => false);
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
