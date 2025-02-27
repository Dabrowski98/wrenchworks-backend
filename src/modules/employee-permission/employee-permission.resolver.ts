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
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards/employee-jwt-auth.guard';
import { Employee } from '../employee/dto';
import { EmployeePermissionService } from './employee-permission.service';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { GraphQLBigInt } from 'graphql-scalars';
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';
import { PureAbility } from '@casl/ability';

@Resolver(() => EmployeePermission)
export class EmployeePermissionResolver {
  constructor(
    private readonly employeePermissionService: EmployeePermissionService,
  ) {}

  // ADMIN
  @CheckAbilities({ action: Action.Create, subject: 'EmployeePermission' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => EmployeePermission)
  createEmployeePermission(
    @Args() args: CreateOneEmployeePermissionArgs,
  ): Promise<EmployeePermission> {
    return this.employeePermissionService.create(args);
  }

  // ADMIN, EMPLOYEE, USER
  @CheckAbilities({ action: Action.Read, subject: 'EmployeePermission' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => EmployeePermission)
  employeePermission(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: FindUniqueEmployeePermissionArgs,
  ): Promise<EmployeePermission> {
    return this.employeePermissionService.findOne(currentEntity, args);
  }

  // ADMIN, EMPLOYEE, USER
  @CheckAbilities({ action: Action.Read, subject: 'EmployeePermission' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [EmployeePermission])
  employeePermissions(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: FindManyEmployeePermissionArgs,
  ): Promise<EmployeePermission[]> {
    return this.employeePermissionService.findMany(currentEntity, args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Moderate, subject: 'EmployeePermission' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => EmployeePermission)
  updateEmployeePermission(
    @Args() args: UpdateOneEmployeePermissionArgs,
  ): Promise<EmployeePermission> {
    return this.employeePermissionService.update(args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Delete, subject: 'EmployeePermission' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  deleteEmployeePermission(
    @Args('employeePermissionId', { type: () => GraphQLBigInt })
    employeePermissionId: bigint,
  ): Promise<boolean> {
    return this.employeePermissionService.delete(employeePermissionId);
  }

  // ADMIN, EMPLOYEE, USER(OWNER)
  @CheckAbilities({ action: Action.Update, subject: 'EmployeePermission' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  assignPermissionsToEmployee(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args('employeeId', { type: () => GraphQLBigInt })
    employeeId: bigint,
    @Args('permissionIds', { type: () => [GraphQLBigInt] })
    permissionIds: bigint[],
  ): Promise<boolean> {
    return this.employeePermissionService.assignPermissionsToEmployee(
      currentEntity,
      employeeId,
      permissionIds,
    );
  }

  // ADMIN, EMPLOYEE, USER(OWNER)
  @CheckAbilities({ action: Action.Update, subject: 'EmployeePermission' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  removePermissionsFromEmployee(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args('employeeId', { type: () => GraphQLBigInt })
    employeeId: bigint,
    @Args('permissionIds', { type: () => [GraphQLBigInt] })
    permissionIds: bigint[],
  ): Promise<boolean> {
    return this.employeePermissionService.removePermissionsFromEmployee(
      currentEntity,
      employeeId,
      permissionIds,
    );
  }

  // RESOLVER METHODS

  @ResolveField(() => [Employee], { nullable: true })
  employees(
    @CurrentAbility() ability: PureAbility,
    @Parent() employeePermission: EmployeePermission,
  ): Promise<Employee[]> {
    return this.employeePermissionService.employees(
      ability,
      employeePermission.permissionId,
    );
  }

  @ResolveField(() => EmployeePermissionCount, { nullable: true })
  _count(
    @CurrentAbility() ability: PureAbility,
    @Parent() employeePermission: EmployeePermission,
  ): Promise<EmployeePermissionCount> {
    return this.employeePermissionService.resolveCount(
      ability,
      employeePermission.permissionId,
    );
  }
}
