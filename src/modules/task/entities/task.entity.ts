import { ObjectType, Field, Float, registerEnumType } from '@nestjs/graphql';
import { TasksStatus } from '@prisma/client';
// import { Service } from 'src/module/service.entity';
// import { EmployeeTask } from '../employee-task/employee-task.entity';

@ObjectType()
export class Task {
  @Field(() => BigInt)
  taskId: bigint;

  @Field(() => BigInt)
  serviceId: bigint;

  @Field(() => BigInt, { nullable: true })
  jobId?: bigint;

  @Field(() => String, { nullable: true })
  customName?: string;

  @Field(() => String)
  description: string;

  @Field(() => TasksStatus)
  status: TasksStatus;

  @Field(() => Float)
  executionTime: number;

  @Field(() => Float)
  partsCost: number;

  // @Field(() => Service)
  // service: Service;

  // @Field(() => [EmployeeTask])
  // taskEmployees: EmployeeTask[];
}

registerEnumType(TasksStatus, {
  name: 'TasksStatus',
});
