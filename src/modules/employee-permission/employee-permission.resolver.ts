import { UseGuards } from '@nestjs/common';
import {
  CreateOneEmployeePermissionArgs,
  EmployeePermission,
  EmployeePermissionCount,
  FindManyEmployeePermissionArgs,
  FindUniqueEmployeePermissionArgs,
  UpdateOneEmployeePermissionArgs,
} from './dto';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AbilitiesGuard, Action, CheckAbilities } from '../ability';
import { CurrentEmployee } from 'src/common/decorators/jwt-decorators/current-employee.decorator';
import { JwtEmployeePayload } from '../auth/employee-auth/dto';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { JwtUserPayload } from '../auth/user-auth/dto';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards/employee-jwt-auth.guard';
import { GraphQLBigInt } from 'graphql-scalars';
import { Employee } from '../employee/dto';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { EmployeePermissionService } from './employee-permission.service';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';

@Resolver(() => EmployeePermission)
export class EmployeePermissionResolver {
  constructor(
    private readonly employeePermissionService: EmployeePermissionService,
  ) {}

  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @CheckAbilities({ action: Action.Read, subject: 'EmployeePermission' })
  @Query(() => EmployeePermission)
  employeePermission(
    @CurrentEmployee() currentEmployee: JwtEmployeePayload,
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: FindUniqueEmployeePermissionArgs,
  ): Promise<EmployeePermission> {
    return this.employeePermissionService.findOne(args, currentEmployee);
  }

  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @CheckAbilities({ action: Action.Read, subject: 'EmployeePermission' })
  @Query(() => [EmployeePermission])
  employeePermissions(
    @CurrentEmployee() currentEmployee: JwtEmployeePayload,
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: FindManyEmployeePermissionArgs,
  ): Promise<EmployeePermission[]> {
    return this.employeePermissionService.findMany(args, currentEmployee);
  }

  //administration only
  @UseGuards(UserJwtAuthGuard)
  @CheckAbilities({ action: Action.Create, subject: 'EmployeePermission' })
  @Mutation(() => EmployeePermission)
  createEmployeePermission(
    @CurrentEmployee() currentEmployee: JwtEmployeePayload,
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: CreateOneEmployeePermissionArgs,
  ): Promise<EmployeePermission> {
    return this.employeePermissionService.create(args, currentEmployee);
  }

  //administration only
  @UseGuards(UserJwtAuthGuard)
  @CheckAbilities({ action: Action.Update, subject: 'EmployeePermission' })
  @Mutation(() => EmployeePermission)
  updateEmployeePermission(
    @CurrentEmployee() currentEmployee: JwtEmployeePayload,
    @Args() args: UpdateOneEmployeePermissionArgs,
  ): Promise<EmployeePermission> {
    return this.employeePermissionService.update(args, currentEmployee);
  }

  //administration only
  @UseGuards(UserJwtAuthGuard)
  @CheckAbilities({ action: Action.Delete, subject: 'EmployeePermission' })
  @Mutation(() => Boolean)
  deleteEmployeePermission(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args('employeePermissionId', { type: () => GraphQLBigInt })
    employeePermissionId: bigint,
  ): Promise<boolean> {
    return this.employeePermissionService.delete(
      employeePermissionId,
      currentUser,
    );
  }

  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @CheckAbilities({ action: Action.Update, subject: 'Employee' })
  @Mutation(() => Boolean)
  assignPermissionsToEmployee(
    @CurrentEmployee() currentEmployee: JwtEmployeePayload,
    @CurrentUser() currentUser: JwtUserPayload,
    @Args('employeeId', { type: () => GraphQLBigInt })
    employeeId: bigint,
    @Args('permissionIds', { type: () => [GraphQLBigInt] })
    permissionIds: bigint[],
  ): Promise<boolean> {
    return this.employeePermissionService.assignPermissionsToEmployee(
      employeeId,
      permissionIds,
      currentEmployee,
      currentUser,
    );
  }

  @UseGuards(AbilitiesGuard)
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @CheckAbilities({ action: Action.Update, subject: 'Employee' })
  @Mutation(() => Boolean)
  removePermissionsFromEmployee(
    @CurrentEmployee() currentEmployee: JwtEmployeePayload,
    @CurrentUser() currentUser: JwtUserPayload,
    @Args('employeeId', { type: () => GraphQLBigInt })
    employeeId: bigint,
    @Args('permissionIds', { type: () => [GraphQLBigInt] })
    permissionIds: bigint[],
  ): Promise<boolean> {
    return this.employeePermissionService.removePermissionsFromEmployee(
      employeeId,
      permissionIds,
      currentEmployee,
      currentUser,
    );
  }

  // @CheckAbilities({ action: Action.Read, subject: 'EmployeePermission' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => String)
  testtest(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
  ) {
    console.log(currentEntity);
    return JSON.stringify(currentEntity);
  }


  // RESOLVER METHODS

  @CheckAbilities({ action: Action.Read, subject: 'Service' })
  @ResolveField(() => [Employee], { nullable: true })
  employees(
    @Parent() employeePermission: EmployeePermission,
  ): Promise<Employee[]> {
    return this.employeePermissionService.employees(
      employeePermission.permissionId,
    );
  }

  @CheckAbilities({ action: Action.Read, subject: 'EmployeePermission' })
  @ResolveField(() => EmployeePermissionCount)
  _count(
    @Parent() employeePermission: EmployeePermission,
  ): Promise<EmployeePermissionCount> {
    return this.employeePermissionService.resolveCount(
      employeePermission.permissionId,
    );
  }
}
