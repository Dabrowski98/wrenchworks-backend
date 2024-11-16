import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TaskCountAggregate {

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Int, {nullable:false})
    serviceId!: number;

    @Field(() => Int, {nullable:false})
    workshopJobId!: number;

    @Field(() => Int, {nullable:false})
    customName!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    executionTime!: number;

    @Field(() => Int, {nullable:false})
    partsCost!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
