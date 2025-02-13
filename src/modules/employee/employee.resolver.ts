import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import {
  CreateOneEmployeeArgs,
  DeleteOneEmployeeArgs,
  FindManyEmployeeArgs,
  FindUniqueEmployeeArgs,
  UpdateOneEmployeeArgs,
  Employee,
  EmployeeCount,
} from './dto';
import { UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { User } from '../user/dto/user.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { Service } from '../service/dto/service.model';
import { Task } from '../task/dto/task.model';
import { JoinWorkshopRequest } from '../join-workshop-request/dto';
import { Action, CheckAbilities } from '../ability';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards/employee-jwt-auth.guard';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Create, subject: 'Employee' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Employee)
  createEmployee(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: CreateOneEmployeeArgs,
  ): Promise<Employee> {
    return this.employeeService.create(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Read, subject: 'Employee' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => Employee)
  employee(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: FindUniqueEmployeeArgs,
  ): Promise<Employee> {
    return this.employeeService.findOne(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Read, subject: 'Employee' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [Employee])
  employees(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args?: FindManyEmployeeArgs,
  ): Promise<Employee[]> {
    return this.employeeService.findMany(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'Employee' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Employee)
  updateEmployee(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: UpdateOneEmployeeArgs,
  ): Promise<Employee> {
    return this.employeeService.update(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'Employee' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  disableEmployee(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args('employeeId', { type: () => GraphQLBigInt })
    employeeId: bigint,
  ): Promise<boolean> {
    return this.employeeService.disable(currentEntity, employeeId);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'Employee' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  enableEmployee(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args('employeeId', { type: () => GraphQLBigInt })
    employeeId: bigint,
  ): Promise<boolean> {
    return this.employeeService.enable(currentEntity, employeeId);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Delete, subject: 'Employee' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  deleteEmployee(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args('employeeId', { type: () => GraphQLBigInt })
    employeeId: bigint,
  ): Promise<boolean> {
    return this.employeeService.delete(currentEntity, employeeId);
  }

  // RESOLVER METHODS

  @CheckAbilities({ action: Action.Read, subject: 'Service' })
  @ResolveField(() => [Service], { nullable: true })
  services(@Parent() employee: Employee): Promise<Service[]> {
    return this.employeeService.services(employee.employeeId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'JoinWorkshopRequest' })
  @ResolveField(() => [JoinWorkshopRequest], { nullable: true })
  joinWorkshopRequests(
    @Parent() employee: Employee,
  ): Promise<JoinWorkshopRequest[]> {
    return this.employeeService.joinWorkshopRequests(employee.employeeId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Task' })
  @ResolveField(() => [Task], { nullable: true })
  tasks(@Parent() employee: Employee): Promise<Task[]> {
    return this.employeeService.tasks(employee.employeeId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'User' })
  @ResolveField(() => User, { nullable: true })
  user(@Parent() employee: Employee): Promise<User | null> {
    return this.employeeService.user(employee.employeeId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Workshop' })
  @ResolveField(() => Workshop, { nullable: true })
  workshop(@Parent() employee: Employee): Promise<Workshop | null> {
    return this.employeeService.workshop(employee.workshopId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Employee' })
  @ResolveField(() => EmployeeCount)
  _count(@Parent() employee: Employee): Promise<EmployeeCount> {
    return this.employeeService.resolveCount(employee.employeeId);
  }
}
