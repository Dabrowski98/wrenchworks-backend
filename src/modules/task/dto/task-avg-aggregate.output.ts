import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class TaskAvgAggregate {

    @Field(() => Float, {nullable:true})
    taskId?: number;

    @Field(() => Float, {nullable:true})
    serviceId?: number;

    @Field(() => Float, {nullable:true})
    jobId?: number;

    @Field(() => Float, {nullable:true})
    executionTime?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    partsCost?: Decimal;
}
