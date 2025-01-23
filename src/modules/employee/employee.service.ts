import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  CreateOneEmployeeArgs,
  FindUniqueEmployeeArgs,
  FindManyEmployeeArgs,
  UpdateOneEmployeeArgs,
  DeleteOneEmployeeArgs,
  Employee,
  EmployeeCount,
} from './dto';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { User } from '../user/dto/user.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { Address } from '../address/dto/address.model';
import { SessionData } from '../session-data/dto/session-data.model';
import { Review } from '../review/dto/review.model';
import { ReviewResponse } from '../review-response/dto/review-response.model';
import { JoinWorkshopRequest } from '../join-workshop-request/dto/join-workshop-request.model';
import { Task } from '../task/dto/task.model';
import { Service } from '../service/dto';
import { EmployeeStatus } from '../prisma';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneEmployeeArgs): Promise<Employee> {
    return this.prisma.employee.create({
      data: { ...args.data, status: EmployeeStatus.ACTIVE },
    });
  }

  async findOne(args: FindUniqueEmployeeArgs): Promise<Employee> {
    const employee = await this.prisma.employee.findUnique(args);
    if (!employee) throw new RecordNotFoundError(Employee);
    return employee;
  }

  async findOneWithPassword(
    args: FindUniqueEmployeeArgs,
  ): Promise<Employee & { password: string }> {
    const employee = await this.prisma.employee.findUnique({
      ...args,
    });
    if (!employee) throw new RecordNotFoundError(Employee);
    return employee;
  }

  async findMany(args: FindManyEmployeeArgs): Promise<Employee[]> {
    return this.prisma.employee.findMany(args);
  }

  async update(args: UpdateOneEmployeeArgs): Promise<Employee> {
    return this.prisma.employee.update(args);
  }

  async updateRefreshToken(
    employeeId: bigint,
    refreshToken: string,
  ): Promise<Employee> {
    return this.prisma.employee.update({
      where: { employeeId },
      data: { refreshToken },
    });
  }

  async enable(
    employeeId: bigint,
    employeeToEnableId: bigint,
  ): Promise<boolean> {
    if (employeeId === employeeToEnableId)
      throw new ForbiddenException('You are not allowed to enable yourself');

    return !!(await this.prisma.employee.update({
      where: { employeeId: employeeToEnableId },
      data: { status: EmployeeStatus.ACTIVE },
    }));
  }

  async disable(
    employeeId: bigint,
    employeeToDisableId: bigint,
  ): Promise<boolean> {
    if (employeeId === employeeToDisableId)
      throw new ForbiddenException('You are not allowed to disable yourself');

    return !!(await this.prisma.employee.update({
      where: { employeeId: employeeToDisableId },
      data: { status: EmployeeStatus.INACTIVE },
    }));
  }

  async delete(employeeId: bigint, args: FindUniqueEmployeeArgs) {
    const employeeToDelete = await this.findOne(args);

    if (!employeeToDelete)
      throw new UnauthorizedException('Employee not found');

    if (employeeId === employeeToDelete.employeeId)
      throw new ForbiddenException('You are not allowed to delete yourself');

    return this.prisma.employee
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVER METHODS

  async services(employeeId: bigint): Promise<Service[]> {
    return (
      await this.prisma.employee.findUnique({
        where: { employeeId },
        include: { services: true },
      })
    ).services;
  }

  async joinWorkshopRequests(
    employeeId: bigint,
  ): Promise<JoinWorkshopRequest[]> {
    return (
      await this.prisma.employee.findUnique({
        where: { employeeId },
        include: { joinWorkshopRequests: true },
      })
    ).joinWorkshopRequests;
  }

  async tasks(employeeId: bigint): Promise<Task[]> {
    return (
      await this.prisma.employee.findUnique({
        where: { employeeId },
        include: { tasks: true },
      })
    ).tasks;
  }

  async user(employeeId: bigint): Promise<User | null> {
    const employee = await this.prisma.employee.findUnique({
      where: { employeeId },
      include: { user: true },
    });
    return employee?.user || null;
  }

  async workshop(employeeId: bigint): Promise<Workshop | null> {
    const employee = await this.prisma.employee.findUnique({
      where: { employeeId },
      include: { workshop: true },
    });
    return employee?.workshop || null;
  }

  async resolveCount(employeeId: bigint): Promise<EmployeeCount> {
    return {
      services: await this.prisma.service.count({ where: { employeeId } }),
      joinWorkshopRequests: await this.prisma.joinWorkshopRequest.count({
        where: { employee: { employeeId } },
      }),
      tasks: await this.prisma.task.count({
        where: { employees: { some: { employeeId } } },
      }),
    };
  }
}
