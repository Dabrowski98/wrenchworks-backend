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
  CreateOneTaskArgs,
  DeleteOneTaskArgs,
  DeleteManyTaskArgs,
  FindManyTaskArgs,
  FindUniqueTaskArgs,
  UpdateOneTaskArgs,
  Task,
  TaskCount,
} from './dto';
import { UseGuards } from '@nestjs/common';
import { CurrentEmployeeID } from 'src/common/decorators/jwt-decorators/current-employee-id.decorator';
import { TaskService } from './task.service';
import { Employee } from '../employee/dto';
import { Service } from '../service/dto';
import { WorkshopJob } from '../workshop-job/dto';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards';
import { Action, CheckAbilities } from '../ability';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { EditOneTaskArgs } from './custom-dto/edit-one-task.args';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Create, subject: 'Task' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Task)
  async createTask(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: CreateOneTaskArgs,
  ): Promise<Task> {
    return this.taskService.create(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Read, subject: 'Task' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => Task)
  async task(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: FindUniqueTaskArgs,
  ): Promise<Task> {
    return this.taskService.findOne(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Read, subject: 'Task' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [Task])
  async tasks(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: FindManyTaskArgs,
  ): Promise<Task[]> {
    return this.taskService.findMany(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Update, subject: 'Task' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Task)
  async updateTask(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: UpdateOneTaskArgs,
  ): Promise<Task> {
    return this.taskService.update(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Delete, subject: 'Task' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteTask(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: DeleteOneTaskArgs,
  ): Promise<boolean> {
    return this.taskService.delete(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Delete, subject: 'Task' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteManyTask(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: DeleteManyTaskArgs,
  ): Promise<boolean> {
    return this.taskService.deleteMany(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Resolve, subject: 'Task' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Task)
  async editTask(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args() args: EditOneTaskArgs,
  ): Promise<Task> {
    return this.taskService.edit(currentEntity, args);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Resolve, subject: 'Task' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Task)
  async completeTask(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args('taskId', { type: () => GraphQLBigInt }) taskId: bigint,
  ): Promise<Task> {
    return this.taskService.complete(currentEntity, taskId);
  }

  // ADMIN, EMPLOYEE
  @CheckAbilities({ action: Action.Resolve, subject: 'Task' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Task)
  async cancelTask(
    @CurrentEntity() currentEntity: JwtUserPayload | JwtEmployeePayload,
    @Args('taskId', { type: () => GraphQLBigInt }) taskId: bigint,
  ): Promise<Task> {
    return this.taskService.cancel(currentEntity, taskId);
  }

  // RESOLVE FIELDS

  @CheckAbilities({ action: Action.Read, subject: 'WorkshopJob' })
  @ResolveField(() => WorkshopJob, { nullable: true })
  async workshopJob(@Parent() task: Task): Promise<WorkshopJob | null> {
    return this.taskService.workshopJob(task.taskId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Employee' })
  @ResolveField(() => [Employee], { nullable: true })
  async employees(@Parent() task: Task): Promise<Employee[]> {
    return this.taskService.employees(task.taskId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Service' })
  @ResolveField(() => Service, { nullable: true })
  async service(@Parent() task: Task): Promise<Service | null> {
    return this.taskService.service(task.serviceId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Task' })
  @ResolveField(() => TaskCount)
  async _count(@Parent() task: Task): Promise<TaskCount> {
    return this.taskService.resolveCount(task.taskId);
  }
}
