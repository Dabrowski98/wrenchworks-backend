import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { EmployeeTask } from './entities/employee-task.entity';
import { CreateEmployeeTaskInput, UpdateEmployeeTaskInput } from './dto';

@Injectable()
export class EmployeeTaskService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createEmployeeTask(data: CreateEmployeeTaskInput) {
    return this.databaseService.employeeTask.create({
      data: {
        taskId: data.taskId,
        employeeId: data.employeeId,
        workshopId: data.workshopId,
      },
    });
  }

  async updateEmployeeTask(
    employeeId: bigint,
    taskId: bigint,
    workshopId: bigint,
    data: UpdateEmployeeTaskInput,
  ) {
    return this.databaseService.employeeTask.update({
      where: {
        employeeId_taskId_workshopId: { employeeId, taskId, workshopId },
      },
      data: {
        taskId: data.taskId,
        employeeId: data.employeeId,
        workshopId: data.workshopId,
      },
    });
  }

  async deleteEmployeeTask(
    employeeId: bigint,
    taskId: bigint,
    workshopId: bigint,
  ) {
    return this.databaseService.employeeTask.delete({
      where: {
        employeeId_taskId_workshopId: { employeeId, taskId, workshopId },
      },
    });
  }
}
