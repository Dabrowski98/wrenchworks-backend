import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class TaskSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    taskId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopJobId?: bigint | number;

    @Field(() => Float, {nullable:true})
    executionTime?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    partsCost?: Decimal;

    @Field(() => String, {nullable:true})
    createdBy?: bigint | number;

    @Field(() => String, {nullable:true})
    updatedBy?: bigint | number;

    @Field(() => String, {nullable:true})
    resolvedBy?: bigint | number;
}
