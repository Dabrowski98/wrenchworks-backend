import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkshopJobCountAggregate {

    @Field(() => Int, {nullable:false})
    workshopJobId!: number;

    @Field(() => Int, {nullable:false})
    workshopId!: number;

    @Field(() => Int, {nullable:false})
    jobId!: number;

    @Field(() => Int, {nullable:false})
    workshopJobDescription!: number;

    @Field(() => Int, {nullable:false})
    minPrice!: number;

    @Field(() => Int, {nullable:false})
    maxPrice!: number;

    @Field(() => Int, {nullable:false})
    availability!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
