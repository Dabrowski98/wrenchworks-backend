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

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(() => Employee)
  employee(@Args() args: FindUniqueEmployeeArgs): Promise<Employee> {
    return this.employeeService.findOne(args);
  }

  @Query(() => [Employee])
  employees(@Args() args: FindManyEmployeeArgs): Promise<Employee[]> {
    return this.employeeService.findMany(args);
  }

  @Mutation(() => Employee)
  updateEmployee(@Args() args: UpdateOneEmployeeArgs): Promise<Employee> {
    return this.employeeService.update(args);
  }

  //@UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  disableEmployee(
    @CurrentEmployeeID() employeeId: bigint,
    @Args('employeeId', { type: () => GraphQLBigInt })
    employeeToDisableId: bigint,
  ): Promise<boolean> {
    return this.employeeService.disable(employeeId, employeeToDisableId);
  }

  //@UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  enableEmployee(
    @CurrentEmployeeID() employeeId: bigint,
    @Args('employeeId', { type: () => GraphQLBigInt })
    employeeToEnableId: bigint,
  ): Promise<boolean> {
    return this.employeeService.enable(employeeId, employeeToEnableId);
  }

  //TODO: refactor,
  // @UseGuards(EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  deleteEmployee(
    @CurrentEmployeeID() employeeId: bigint,
    @Args() args: DeleteOneEmployeeArgs,
  ): Promise<boolean> {
    return this.employeeService.delete(employeeId, args);
  }

  // RESOLVER METHODS

  @ResolveField(() => [Service], { nullable: true })
  services(@Parent() employee: Employee): Promise<Service[]> {
    return this.employeeService.services(employee.employeeId);
  }

  @ResolveField(() => [JoinWorkshopRequest], { nullable: true })
  joinWorkshopRequests(
    @Parent() employee: Employee,
  ): Promise<JoinWorkshopRequest[]> {
    return this.employeeService.joinWorkshopRequests(employee.employeeId);
  }

  @ResolveField(() => [Task], { nullable: true })
  tasks(@Parent() employee: Employee): Promise<Task[]> {
    return this.employeeService.tasks(employee.employeeId);
  }

  @ResolveField(() => User, { nullable: true })
  user(@Parent() employee: Employee): Promise<User | null> {
    return this.employeeService.user(employee.employeeId);
  }

  @ResolveField(() => Workshop, { nullable: true })
  workshop(@Parent() employee: Employee): Promise<Workshop | null> {
    return this.employeeService.workshop(employee.workshopId);
  }

  @ResolveField(() => EmployeeCount)
  _count(@Parent() employee: Employee): Promise<EmployeeCount> {
    return this.employeeService.resolveCount(employee.employeeId);
  }
}
