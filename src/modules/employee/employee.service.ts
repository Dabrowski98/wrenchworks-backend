import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateEmployeeInput, UpdateEmployeeInput } from './dto/index';

@Injectable()
export class EmployeeService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createEmployee(data: CreateEmployeeInput) {
    return this.databaseService.employee.create({
      data: {
        employeeId: data.employeeId,
        workshopId: data.workshopId,
        joinedAt: data.joinedAt,
        deletedAt: data.deletedAt,
        permissionSetId: data.permissionSetId,
      },
    });
  }

  async updateEmployee(id: bigint, workshopId: bigint, data: UpdateEmployeeInput) {
    return this.databaseService.employee.update({
      where: { employeeId_workshopId: { employeeId: id, workshopId: workshopId } },
      data: {
        joinedAt: data.joinedAt,
        deletedAt: data.deletedAt,
        permissionSetId: data.permissionSetId,
      },
    });
  }

  async deleteEmployee(id: bigint, workshopId: bigint) {
    return this.databaseService.employee.delete({
      where: { employeeId_workshopId: { employeeId: id, workshopId: workshopId } },
    });
  }

  async findAllEmployees() {
    return this.databaseService.employee.findMany();
  }

  async findEmployeeById(id: bigint, workshopId: bigint) {
    return this.databaseService.employee.findUnique({
      where: { employeeId_workshopId: { employeeId: id, workshopId: workshopId } },
    });
  }
}
