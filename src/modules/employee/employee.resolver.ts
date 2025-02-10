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
import { Guest } from '../guest/dto/guest.model';
import { User } from '../user/dto/user.model';
import { Vehicle } from '../vehicle/dto/vehicle.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { Address } from '../address/dto/address.model';
import { SessionData } from '../session-data/dto/session-data.model';
import { Review } from '../review/dto/review.model';
import { ReviewResponse } from '../review-response/dto/review-response.model';
import { Service } from '../service/dto/service.model';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards/employee-jwt-auth.guard';
import { CurrentEmployeeID } from 'src/common/decorators/jwt-decorators/current-employee-id.decorator';
import * as Scalars from 'graphql-scalars';
import { Task } from '../task/dto/task.model';
import { JoinWorkshopRequest } from '../join-workshop-request/dto';
import { Action, CheckAbilities } from '../ability';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { CurrentEmployee } from 'src/common/decorators/jwt-decorators/current-employee.decorator';
import { JwtEmployeePayload } from '../auth/employee-auth/dto';

@UseGuards(EmployeeJwtAuthGuard, AbilitiesGuard)
@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  // @CheckAbilities({ action: Action.Read, subject: 'Employee' })
  // @Query(() => Employee)
  // employee(
  //   @CurrentEmployee() currentEmployee: JwtEmployeePayload,
  //   @Args() args: FindUniqueEmployeeArgs,
  // ): Promise<Employee> {
  //   return this.employeeService.findOne(args, currentEmployee);
  // }

  // @CheckAbilities({ action: Action.Read, subject: 'Employee' })
  // @Query(() => [Employee])
  // employees(
  //   @CurrentEmployee() currentEmployee: JwtEmployeePayload,
  //   @Args() args: FindManyEmployeeArgs,
  // ): Promise<Employee[]> {
  //   return this.employeeService.findMany(args, currentEmployee);
  // }

  // @CheckAbilities({ action: Action.Create, subject: 'Employee' })
  // @Mutation(() => Employee)
  // createEmployee(
  //   @CurrentEmployee() currentEmployee: JwtEmployeePayload,
  //   @Args() args: CreateOneEmployeeArgs,
  // ): Promise<Employee> {
  //   return this.employeeService.create(args, currentEmployee);
  // }

  // @CheckAbilities({ action: Action.Update, subject: 'Employee' })
  // @Mutation(() => Employee)
  // updateEmployee(
  //   @CurrentEmployee() currentEmployee: JwtEmployeePayload,
  //   @Args() args: UpdateOneEmployeeArgs,
  // ): Promise<Employee> {
  //   return this.employeeService.update(args, currentEmployee);
  // }

  // @CheckAbilities({ action: Action.Update, subject: 'Employee' })
  // @Mutation(() => Boolean)
  // disableEmployee(
  //   @CurrentEmployee() currentEmployee: JwtEmployeePayload,
  //   @Args('employeeId', { type: () => GraphQLBigInt })
  //   employeeToDisableId: bigint,
  // ): Promise<boolean> {
  //   return this.employeeService.disable(employeeToDisableId, currentEmployee);
  // }

  // @CheckAbilities({ action: Action.Update, subject: 'Employee' })
  // @Mutation(() => Boolean)
  // enableEmployee(
  //   @CurrentEmployee() currentEmployee: JwtEmployeePayload,
  //   @Args('employeeId', { type: () => GraphQLBigInt })
  //   employeeToEnableId: bigint,
  // ): Promise<boolean> {
  //   return this.employeeService.enable(employeeToEnableId, currentEmployee);
  // }

  // @CheckAbilities({ action: Action.Delete, subject: 'Employee' })
  // @Mutation(() => Boolean)
  // deleteEmployee(
  //   @CurrentEmployee() currentEmployee: JwtEmployeePayload,
  //   @Args() args: DeleteOneEmployeeArgs,
  // ): Promise<boolean> {
  //   return this.employeeService.delete(args, currentEmployee);
  // }

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
