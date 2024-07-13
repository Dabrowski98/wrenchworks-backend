import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { EmployeeTask } from './entities/employee-task.entity';
import { EmployeeTaskService } from './employee-task.service';
import { CreateEmployeeTaskInput, UpdateEmployeeTaskInput } from './dto';

@Resolver(() => EmployeeTask)
export class EmployeeTaskResolver {
  constructor(private readonly employeeTaskService: EmployeeTaskService) {}

  @Mutation(() => EmployeeTask)
  async createEmployeeTask(@Args('data') data: CreateEmployeeTaskInput) {
    return this.employeeTaskService.createEmployeeTask(data);
  }

  @Mutation(() => EmployeeTask)
  async updateEmployeeTask(
    @Args('employeeId', { type: () => BigInt }) employeeId: bigint,
    @Args('taskId', { type: () => BigInt }) taskId: bigint,
    @Args('workshopId', { type: () => BigInt }) workshopId: bigint,
    @Args('data') data: UpdateEmployeeTaskInput,
  ) {
    return this.employeeTaskService.updateEmployeeTask(employeeId, taskId, workshopId, data);
  }

  @Mutation(() => EmployeeTask)
  async deleteEmployeeTask(
    @Args('employeeId', { type: () => BigInt }) employeeId: bigint,
    @Args('taskId', { type: () => BigInt }) taskId: bigint,
    @Args('workshopId', { type: () => BigInt }) workshopId: bigint,
  ) {
    return this.employeeTaskService.deleteEmployeeTask(employeeId, taskId, workshopId);
  }
}
