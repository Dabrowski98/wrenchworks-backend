import { Injectable } from '@nestjs/common';
import {
  CreateOneEmployeePermissionArgs,
  EmployeePermission,
  EmployeePermissionCount,
  FindManyEmployeePermissionArgs,
  FindUniqueEmployeePermissionArgs,
  UpdateOneEmployeePermissionArgs,
} from './dto';
import { JwtEmployeePayload } from '../auth/employee-auth/dto';
import { JwtUserPayload } from '../auth/user-auth/dto';
import { Employee } from '../employee/dto';
import { ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class EmployeePermissionService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(
    args: FindUniqueEmployeePermissionArgs,
    currentEmployee: JwtEmployeePayload,
  ): Promise<EmployeePermission> {
    return this.prisma.employeePermission.findUniqueOrThrow(args);
  }

  async findMany(
    args: FindManyEmployeePermissionArgs,
    currentEmployee: JwtEmployeePayload,
  ): Promise<EmployeePermission[]> {
    return this.prisma.employeePermission.findMany(args);
  }

  async create(
    args: CreateOneEmployeePermissionArgs,
    currentEmployee: JwtEmployeePayload,
  ): Promise<EmployeePermission> {
    return this.prisma.employeePermission.create(args);
  }

  async update(
    args: UpdateOneEmployeePermissionArgs,
    currentEmployee: JwtEmployeePayload,
  ): Promise<EmployeePermission> {
    return this.prisma.employeePermission.update(args);
  }

  async delete(
    permissionId: bigint,
    currentUser: JwtUserPayload,
  ): Promise<boolean> {
    await this.prisma.employeePermission.delete({
      where: { permissionId },
    });
    return true;
  }

  async assignPermissionsToEmployee(
    employeeId: bigint,
    permissionIds: bigint[],
    currentEmployee: JwtEmployeePayload,
    currentUser: JwtUserPayload,
  ): Promise<boolean> {
    // Verify employee exists
    const employee = await this.prisma.employee.findUnique({
      where: { employeeId },
    });

    if (!employee) {
      throw new ForbiddenException('Employee not found');
    }

    // Connect permissions to employee
    await this.prisma.employee.update({
      where: { employeeId },
      data: {
        permissions: {
          connect: permissionIds.map((id) => ({ permissionId: id })),
        },
      },
    });

    return true;
  }

  async removePermissionsFromEmployee(
    employeeId: bigint,
    permissionIds: bigint[],
    currentEmployee: JwtEmployeePayload,
    currentUser: JwtUserPayload,
  ): Promise<boolean> {
    // Verify employee exists
    const employee = await this.prisma.employee.findUnique({
      where: { employeeId },
    });

    if (!employee) {
      throw new ForbiddenException('Employee not found');
    }

    // Disconnect permissions from employee
    await this.prisma.employee.update({
      where: { employeeId },
      data: {
        permissions: {
          disconnect: permissionIds.map((id) => ({ permissionId: id })),
        },
      },
    });

    return true;
  }

  // Resolver field methods
  async employees(permissionId: bigint): Promise<Employee[]> {
    const permission = await this.prisma.employeePermission.findUnique({
      where: { permissionId },
      include: { employees: true },
    });
    return permission.employees;
  }

  async resolveCount(permissionId: bigint): Promise<EmployeePermissionCount> {
    const count = await this.prisma.employeePermission.findUnique({
      where: { permissionId },
      include: {
        _count: {
          select: {
            employees: true,
          },
        },
      },
    });
    return count._count;
  }
}
