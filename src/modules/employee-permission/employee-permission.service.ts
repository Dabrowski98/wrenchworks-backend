import { Injectable } from '@nestjs/common';
import {
  CreateOneEmployeePermissionArgs,
  EmployeePermission,
  EmployeePermissionCount,
  FindManyEmployeePermissionArgs,
  FindUniqueEmployeePermissionArgs,
  UpdateOneEmployeePermissionArgs,
} from './dto';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { Employee } from '../employee/dto';
import { ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AbilityFactory } from '../ability';
import { ForbiddenError, subject } from '@casl/ability';
import { Action } from '../ability';
import { accessibleBy } from '@casl/prisma';

@Injectable()
export class EmployeePermissionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(
    args: CreateOneEmployeePermissionArgs,
  ): Promise<EmployeePermission> {
    return this.prisma.employeePermission.create(args);
  }

  async findOne(
    args: FindUniqueEmployeePermissionArgs,
  ): Promise<EmployeePermission> {
    return this.prisma.employeePermission.findUniqueOrThrow(args);
  }

  async findMany(
    args: FindManyEmployeePermissionArgs,
  ): Promise<EmployeePermission[]> {
    return this.prisma.employeePermission.findMany(args);
  }

  async update(
    args: UpdateOneEmployeePermissionArgs,
  ): Promise<EmployeePermission> {
    return this.prisma.employeePermission.update(args);
  }

  async delete(permissionId: bigint): Promise<boolean> {
    return this.prisma.employeePermission
      .delete({
        where: { permissionId },
      })
      .then(() => true)
      .catch(() => false);
  }

  async assignPermissionsToEmployee(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    employeeId: bigint,
    permissionIds: bigint[],
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const employee = await this.prisma.employee.findUnique({
      where: { employeeId },
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });

    if (!employee) {
      throw new ForbiddenException('Employee not found');
    }

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('EmployeePermission', { employee } as any),
    );

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
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    employeeId: bigint,
    permissionIds: bigint[],
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const employee = await this.prisma.employee.findUnique({
      where: { employeeId },
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });

    if (!employee) {
      throw new ForbiddenException('Employee not found');
    }

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('EmployeePermission', { employee } as any),
    );

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
      where: {
        permissionId,
      },
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
