import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Task } from './entities/task.entity';
import { TaskService } from './task.service';
import { CreateTaskInput, UpdateTaskInput } from './dto';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task])
  async tasks() {
    return this.taskService.findAllTasks();
  }

  @Query(() => Task, { nullable: true })
  async task(@Args('taskId', { type: () => BigInt }) taskId: bigint) {
    return this.taskService.findTaskById(taskId);
  }

  @Mutation(() => Task)
  async createTask(@Args('data') data: CreateTaskInput) {
    return this.taskService.createTask(data);
  }

  @Mutation(() => Task)
  async updateTask(
    @Args('taskId', { type: () => BigInt }) taskId: bigint,
    @Args('data') data: UpdateTaskInput,
  ) {
    return this.taskService.updateTask(taskId, data);
  }

  @Mutation(() => Task)
  async deleteTask(@Args('taskId', { type: () => BigInt }) taskId: bigint) {
    return this.taskService.deleteTask(taskId);
  }
}
