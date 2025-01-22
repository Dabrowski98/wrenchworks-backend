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
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { TaskStatus, WorkshopJob } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneTaskArgs, employeeId: bigint): Promise<Task> {
    return this.prisma.task.create({
      data: { ...args.data, createdAt: new Date(), createdBy: employeeId },
    });
  }

  async findOne(args: FindUniqueTaskArgs): Promise<Task> {
    const task = await this.prisma.task.findUnique(args);
    if (!task) throw new RecordNotFoundError(Task);
    return task;
  }

  async findMany(args: FindManyTaskArgs): Promise<Task[]> {
    return this.prisma.task.findMany(args);
  }

  async update(args: UpdateOneTaskArgs): Promise<Task> {
    return this.prisma.task.update(args);
  }

  async delete(args: DeleteOneTaskArgs): Promise<boolean> {
    await this.prisma.task.delete({
      where: args.where,
    });
    return true;
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
