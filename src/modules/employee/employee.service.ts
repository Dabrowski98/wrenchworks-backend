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
  DeleteManyEmployeeArgs,
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
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { AbilityFactory, accessibleBy } from '../ability';
import { ForbiddenError } from '@casl/ability';
import { Action } from '../ability';
import { subject } from '@casl/ability';
import { isEmployeePayload } from 'src/common/utils/type-guards';
@Injectable()
export class EmployeeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: CreateOneEmployeeArgs,
  ): Promise<Employee> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const workshop = await this.prisma.workshop.findUnique({
      where: { workshopId: args.data.workshop.connect.workshopId },
    });
    if (!workshop) throw new RecordNotFoundError(Workshop);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('Employee', { workshop } as any),
    );

    return this.prisma.employee.create({
      data: { ...args.data, status: EmployeeStatus.ACTIVE },
    });
  }

  async findOne(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: FindUniqueEmployeeArgs,
  ): Promise<Employee> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const employee = await this.prisma.employee.findFirst({
      where: { AND: [accessibleBy(ability).Employee, args.where] },
    });
    if (!employee) throw new RecordNotFoundError(Employee);
    return employee;
  }

  async findMany(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args?: FindManyEmployeeArgs,
  ): Promise<Employee[]> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    return this.prisma.employee.findMany({
      where: {
        AND: [accessibleBy(ability).Employee, args.where],
      },
    });
  }

  async update(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: UpdateOneEmployeeArgs,
  ): Promise<Employee> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const employee = await this.prisma.employee.findUnique({
      where: args.where,
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });
    if (!employee) throw new RecordNotFoundError(Employee);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Employee', employee),
    );

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
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    employeeId: bigint,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const employeeToEnable = await this.prisma.employee.findUnique({
      where: { employeeId },
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });

    if (!employeeToEnable) throw new RecordNotFoundError(Employee);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Employee', employeeToEnable),
    );

    if (
      isEmployeePayload(currentEntity) &&
      currentEntity.employeeId === employeeToEnable.employeeId
    )
      throw new ForbiddenException('You are not allowed to enable yourself');

    return !!(await this.prisma.employee.update({
      where: { employeeId: employeeToEnable.employeeId },
      data: { status: EmployeeStatus.ACTIVE },
    }));
  }

  async disable(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    employeeId: bigint,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const employeeToDisable = await this.prisma.employee.findUnique({
      where: { employeeId },
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });

    if (!employeeToDisable) throw new RecordNotFoundError(Employee);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Employee', employeeToDisable),
    );

    if (
      isEmployeePayload(currentEntity) &&
      currentEntity.employeeId === employeeToDisable.employeeId
    )
      throw new ForbiddenException('You are not allowed to disable yourself');

    return !!(await this.prisma.employee.update({
      where: { employeeId },
      data: { status: EmployeeStatus.INACTIVE },
    }));
  }

  async delete(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    employeeId: bigint,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const employeeToDelete = await this.prisma.employee.findUnique({
      where: { employeeId },
      include: {
        workshop: { select: { workshopId: true, ownerId: true } },
      },
    });
    if (!employeeToDelete) throw new RecordNotFoundError(Employee);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('Employee', employeeToDelete),
    );

    if (employeeId === employeeToDelete.employeeId)
      throw new ForbiddenException('You are not allowed to delete yourself');

    return this.prisma.employee
      .delete({
        where: { employeeId },
      })
      .then(() => true)
      .catch(() => false);
  }

  async deleteMany(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: DeleteManyEmployeeArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const employees = await this.prisma.employee.findMany({
      where: { AND: [accessibleBy(ability).Employee, args.where] },
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });

    employees.forEach((employee) => {
      ForbiddenError.from(ability).throwUnlessCan(
        Action.Delete,
        subject('Employee', employee),
      );
    });

    return this.prisma.employee
      .deleteMany({
        where: { AND: [accessibleBy(ability).Employee, args.where] },
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
