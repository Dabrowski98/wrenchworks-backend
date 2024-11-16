import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { TasksStatus } from '../../prisma/dto/tasks-status.enum';
import { Float } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { WorkshopJob } from '../../workshop-job/dto/workshop-job.model';
import { Service } from '../../service/dto/service.model';
import { EmployeeTask } from '../../employee-task/dto/employee-task.model';
import { TaskCount } from './task-count.output';

@ObjectType()
export class Task {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    taskId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    serviceId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopJobId!: bigint;

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

    @Field(() => WorkshopJob, {nullable:false})
    workshopJob?: WorkshopJob;

    @Field(() => Service, {nullable:false})
    service?: Service;

    @Field(() => [EmployeeTask], {nullable:true})
    taskEmployees?: Array<EmployeeTask>;

    @Field(() => TaskCount, {nullable:false})
    _count?: TaskCount;
}
