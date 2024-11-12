import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { TasksStatus } from '../../prisma/dto/tasks-status.enum';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class TaskMaxAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    taskId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    jobId?: bigint | number;

    @Field(() => String, {nullable:true})
    customName?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => TasksStatus, {nullable:true})
    status?: keyof typeof TasksStatus;

    @Field(() => Float, {nullable:true})
    executionTime?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    partsCost?: Decimal;
}
