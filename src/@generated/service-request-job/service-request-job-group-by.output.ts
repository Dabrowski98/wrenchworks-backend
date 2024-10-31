import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestJobCountAggregate } from './service-request-job-count-aggregate.output';
import { ServiceRequestJobAvgAggregate } from './service-request-job-avg-aggregate.output';
import { ServiceRequestJobSumAggregate } from './service-request-job-sum-aggregate.output';
import { ServiceRequestJobMinAggregate } from './service-request-job-min-aggregate.output';
import { ServiceRequestJobMaxAggregate } from './service-request-job-max-aggregate.output';

@ObjectType()
export class ServiceRequestJobGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    serviceRequestId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    jobId!: bigint | number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => ServiceRequestJobCountAggregate, {nullable:true})
    _count?: ServiceRequestJobCountAggregate;

    @Field(() => ServiceRequestJobAvgAggregate, {nullable:true})
    _avg?: ServiceRequestJobAvgAggregate;

    @Field(() => ServiceRequestJobSumAggregate, {nullable:true})
    _sum?: ServiceRequestJobSumAggregate;

    @Field(() => ServiceRequestJobMinAggregate, {nullable:true})
    _min?: ServiceRequestJobMinAggregate;

    @Field(() => ServiceRequestJobMaxAggregate, {nullable:true})
    _max?: ServiceRequestJobMaxAggregate;
}
