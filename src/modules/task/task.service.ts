import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { Task } from './entities/task.entity';
import { CreateTaskInput, UpdateTaskInput } from './dto';

@Injectable()
export class TaskService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAllTasks() {
    return this.databaseService.task.findMany();
  }

  async findTaskById(taskId: bigint) {
    return this.databaseService.task.findUnique({
      where: { taskId },
      include: { service: true, taskEmployees: true },
    });
  }

  async createTask(data: CreateTaskInput) {
    return this.databaseService.task.create({
      data: {
        serviceId: data.serviceId,
        jobId: data.jobId,
        customName: data.customName,
        description: data.description,
        executionTime: data.executionTime,
        partsCost: data.partsCost,
      },
    });
  }

  async updateTask(taskId: bigint, data: UpdateTaskInput) {
    return this.databaseService.task.update({
      where: { taskId },
      data: {
        jobId: data.jobId,
        customName: data.customName,
        description: data.description,
        executionTime: data.executionTime,
        partsCost: data.partsCost,
      },
    });
  }

  async deleteTask(taskId: bigint) {
    return this.databaseService.task.delete({ where: { taskId } });
  }
}
