import { ObjectType, Field } from '@nestjs/graphql';
import { Task } from 'src/modules/task/entities/task.entity';
import { Employee } from 'src/modules/employee/entities/employee.entity';

@ObjectType()
export class EmployeeTask {
  @Field(() => BigInt)
  taskId: bigint;

  @Field(() => BigInt)
  employeeId: bigint;

  @Field(() => BigInt)
  workshopId: bigint;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Employee)
  employee: Employee;

  @Field(() => Task)
  task: Task;
}