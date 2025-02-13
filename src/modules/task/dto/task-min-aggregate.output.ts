import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { TaskStatus } from '../../prisma/dto/task-status.enum';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class TaskMinAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    taskId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopJobId?: bigint | number;

    @Field(() => String, {nullable:true})
    customName?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => TaskStatus, {nullable:true})
    status?: keyof typeof TaskStatus;

    @Field(() => Float, {nullable:true})
    executionTime?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    partsCost?: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    createdBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    updatedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    resolvedAt?: Date | string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    resolvedBy?: bigint | number;
}
