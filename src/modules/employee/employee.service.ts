import { Injectable } from '@nestjs/common';
import { EmployeeCreateInput } from './dto/employee-create.input';
import { Employee, FindUniqueEmployeeArgs } from './dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async createEmployee(input: EmployeeCreateInput): Promise<Employee> {
    return this.prisma.employee.create({ data: input });
  }

  async findEmployee(args: FindUniqueEmployeeArgs) {
    return this.prisma.employee.findUnique(args);
  }
}
