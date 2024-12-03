import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { WorkshopJobCountAggregate } from './workshop-job-count-aggregate.output';
import { WorkshopJobAvgAggregate } from './workshop-job-avg-aggregate.output';
import { WorkshopJobSumAggregate } from './workshop-job-sum-aggregate.output';
import { WorkshopJobMinAggregate } from './workshop-job-min-aggregate.output';
import { WorkshopJobMaxAggregate } from './workshop-job-max-aggregate.output';

@ObjectType()
export class WorkshopJobGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopJobId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    jobId!: bigint | number;

    @Field(() => String, {nullable:true})
    workshopJobDescription?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    minPrice?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    maxPrice?: Decimal;

    @Field(() => Boolean, {nullable:false})
    availability!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: bigint | number;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: bigint | number;

    @Field(() => WorkshopJobCountAggregate, {nullable:true})
    _count?: WorkshopJobCountAggregate;

    @Field(() => WorkshopJobAvgAggregate, {nullable:true})
    _avg?: WorkshopJobAvgAggregate;

    @Field(() => WorkshopJobSumAggregate, {nullable:true})
    _sum?: WorkshopJobSumAggregate;

    @Field(() => WorkshopJobMinAggregate, {nullable:true})
    _min?: WorkshopJobMinAggregate;

    @Field(() => WorkshopJobMaxAggregate, {nullable:true})
    _max?: WorkshopJobMaxAggregate;
}
