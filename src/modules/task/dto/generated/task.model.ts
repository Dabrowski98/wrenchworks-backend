import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { TasksStatus } from '../../../prisma/dto/generated/tasks-status.enum';
import { Float } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Service } from '../../../service/dto/generated/service.model';
import { EmployeeTask } from '../../../employee-task/dto/generated/employee-task.model';
import { TaskCount } from './task-count.output';

@ObjectType()
export class Task {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    taskId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    serviceId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    jobId!: bigint | null;

    @Field(() => String, {nullable:true})
    customName!: string | null;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => TasksStatus, {nullable:true,defaultValue:'pending'})
    status!: keyof typeof TasksStatus | null;

    @Field(() => Float, {nullable:false})
    executionTime!: number;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    partsCost!: Decimal;

    @Field(() => Service, {nullable:false})
    service?: Service;

    @Field(() => [EmployeeTask], {nullable:true})
    taskEmployees?: Array<EmployeeTask>;

    @Field(() => TaskCount, {nullable:false})
    _count?: TaskCount;
}
