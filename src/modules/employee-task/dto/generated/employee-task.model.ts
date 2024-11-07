import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Employee } from '../../../employee/dto/generated/employee.model';
import { Task } from '../../../task/dto/generated/task.model';

@ObjectType()
export class EmployeeTask {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    taskId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Employee, {nullable:false})
    employee?: Employee;

    @Field(() => Task, {nullable:false})
    Task?: Task;
}
