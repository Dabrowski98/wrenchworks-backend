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

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Mutation(() => Task)
  async createTask(
    @Args() args: CreateOneTaskArgs,
    @CurrentEmployeeID() employeeId: bigint,
  ): Promise<Task> {
    return this.taskService.create(args, employeeId);
  }

  @Query(() => Task)
  async task(@Args() args: FindUniqueTaskArgs): Promise<Task> {
    return this.taskService.findOne(args);
  }

  @Query(() => [Task])
  async tasks(@Args() args: FindManyTaskArgs): Promise<Task[]> {
    return this.taskService.findMany(args);
  }

  @Mutation(() => Task)
  async updateTask(@Args() args: UpdateOneTaskArgs): Promise<Task> {
    return this.taskService.update(args);
  }

  @Mutation(() => Boolean)
  async deleteTask(@Args() args: DeleteOneTaskArgs): Promise<boolean> {
    return this.taskService.delete(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => WorkshopJob, { nullable: true })
  async workshopJob(@Parent() task: Task): Promise<WorkshopJob | null> {
    return this.taskService.workshopJob(task.taskId);
  }

  @ResolveField(() => [Employee], { nullable: true })
  async employees(@Parent() task: Task): Promise<Employee[]> {
    return this.taskService.employees(task.taskId);
  }

  @ResolveField(() => Service, { nullable: true })
  async service(@Parent() task: Task): Promise<Service | null> {
    return this.taskService.service(task.serviceId);
  }

  @ResolveField(() => TaskCount)
  async _count(@Parent() task: Task): Promise<TaskCount> {
    return this.taskService.resolveCount(task.taskId);
  }
}
