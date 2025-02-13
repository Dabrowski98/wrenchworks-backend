import { Injectable } from '@nestjs/common';
import {
  CreateOneTaskArgs,
  UpdateOneTaskArgs,
  DeleteOneTaskArgs,
  FindUniqueTaskArgs,
  FindManyTaskArgs,
  Task,
  TaskCount,
} from './dto';
import { PrismaService } from 'src/database/prisma.service';
import { Employee } from '../employee/dto/employee.model';
import { Service } from '../service/dto/service.model';
import {
  CustomForbiddenError,
  RecordNotFoundError,
} from 'src/common/custom-errors/errors.config';
import { TaskStatus, WorkshopJob } from '@prisma/client';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { isEmployeePayload } from 'src/common/utils/type-guards';
import { AbilityFactory } from '../ability/ability.factory';
import { ForbiddenError } from '@casl/ability';
import { Action } from '../ability';
import { subject } from '@casl/ability';
import { accessibleBy } from '@casl/prisma';
import { EditOneTaskArgs } from './custom-dto/edit-one-task.args';

@Injectable()
export class TaskService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: CreateOneTaskArgs,
  ): Promise<Task> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const service = await this.prisma.service.findUnique({
      where: { serviceId: args.data.service.connect.serviceId },
      include: {
        workshop: { select: { workshopId: true, ownerId: true } },
      },
    });

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('Task', { service } as any),
    );

    return this.prisma.task.create({
      data: {
        ...args.data,
        createdAt: new Date(),
        createdBy: isEmployeePayload(currentEntity)
          ? currentEntity.employeeId
          : null,
      },
    });
  }

  async findOne(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: FindUniqueTaskArgs,
  ): Promise<Task> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const task = await this.prisma.task.findFirst({
      where: { AND: [accessibleBy(ability).Task, args.where] },
    });
    if (!task) throw new RecordNotFoundError(Task);

    return task;
  }

  async findMany(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args?: FindManyTaskArgs,
  ): Promise<Task[]> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    return await this.prisma.task.findMany({
      where: { AND: [accessibleBy(ability).Task, args?.where || {}] },
    });
  }

  async update(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: UpdateOneTaskArgs,
  ): Promise<Task> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const task = await this.prisma.task.findFirst({
      where: args.where,
      include: {
        service: {
          include: {
            workshop: { select: { workshopId: true, ownerId: true } },
          },
        },
      },
    });
    if (!task) throw new RecordNotFoundError(Task);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Task', task),
    );
    return this.prisma.task.update(args);
  }

  async delete(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: DeleteOneTaskArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const task = await this.prisma.task.findFirst({
      where: args.where,
      include: {
        service: {
          include: {
            workshop: { select: { workshopId: true, ownerId: true } },
          },
        },
      },
    });
    if (!task) throw new RecordNotFoundError(Task);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('Task', task),
    );
    await this.prisma.task.delete({
      where: args.where,
    });
    return true;
  }

  async edit(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: EditOneTaskArgs,
  ): Promise<Task> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const task = await this.prisma.task.findFirst({
      where: args.where,
      include: {
        service: {
          include: {
            workshop: { select: { workshopId: true, ownerId: true } },
          },
        },
      },
    });
    if (
      task.status === TaskStatus.COMPLETED ||
      task.status === TaskStatus.CANCELLED
    ) {
      throw new CustomForbiddenError(
        'Cannot edit a completed or cancelled task',
      );
    }
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Resolve,
      subject('Task', task),
    );
    return this.prisma.task.update(args);
  }

  async complete(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    taskId: bigint,
  ): Promise<Task> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const task = await this.prisma.task.findFirst({
      where: { taskId },
      include: {
        service: {
          include: {
            workshop: { select: { workshopId: true, ownerId: true } },
          },
        },
      },
    });
    if (!task) throw new RecordNotFoundError(Task);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Resolve,
      subject('Task', task),
    );
    if (
      task.status === TaskStatus.COMPLETED ||
      task.status === TaskStatus.CANCELLED
    ) {
      throw new CustomForbiddenError(
        'Cannot complete a completed or cancelled task',
      );
    }
    return this.prisma.task.update({
      where: { taskId },
      data: {
        status: TaskStatus.COMPLETED,
        resolvedAt: new Date(),
        resolvedBy: isEmployeePayload(currentEntity)
          ? currentEntity.employeeId
          : null,
      },
    });
  }

  async cancel(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    taskId: bigint,
  ): Promise<Task> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const task = await this.prisma.task.findFirst({
      where: { taskId },
      include: {
        service: {
          include: {
            workshop: { select: { workshopId: true, ownerId: true } },
          },
        },
      },
    });
    if (!task) throw new RecordNotFoundError(Task);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Resolve,
      subject('Task', task),
    );
    if (
      task.status === TaskStatus.COMPLETED ||
      task.status === TaskStatus.CANCELLED
    ) {
      throw new CustomForbiddenError(
        'Cannot cancel a completed or cancelled task',
      );
    }
    return this.prisma.task.update({
      where: { taskId },
      data: {
        status: TaskStatus.CANCELLED,
        resolvedAt: new Date(),
        resolvedBy: isEmployeePayload(currentEntity)
          ? currentEntity.employeeId
          : null,
      },
    });
  }

  // RESOLVE METHODS

  async workshopJob(taskId: bigint): Promise<WorkshopJob | null> {
    return (
      await this.prisma.task.findUnique({
        where: { taskId },
        include: { workshopJob: true },
      })
    ).workshopJob;
  }

  async employees(taskId: bigint): Promise<Employee[]> {
    return (
      await this.prisma.task.findUnique({
        where: { taskId },
        include: { employees: true },
      })
    ).employees;
  }

  async service(taskId: bigint): Promise<Service | null> {
    return (
      await this.prisma.task.findUnique({
        where: { taskId },
        include: { service: true },
      })
    ).service;
  }

  async resolveCount(taskId: bigint): Promise<TaskCount> {
    return {
      employees: await this.prisma.employee.count({
        where: { tasks: { some: { taskId } } },
      }),
    };
  }
}
