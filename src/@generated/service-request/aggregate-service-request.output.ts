import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ServiceRequestCountAggregate } from './service-request-count-aggregate.output';
import { ServiceRequestAvgAggregate } from './service-request-avg-aggregate.output';
import { ServiceRequestSumAggregate } from './service-request-sum-aggregate.output';
import { ServiceRequestMinAggregate } from './service-request-min-aggregate.output';
import { ServiceRequestMaxAggregate } from './service-request-max-aggregate.output';

@ObjectType()
export class AggregateServiceRequest {

    @Field(() => ServiceRequestCountAggregate, {nullable:true})
    _count?: ServiceRequestCountAggregate;

    @Field(() => ServiceRequestAvgAggregate, {nullable:true})
    _avg?: ServiceRequestAvgAggregate;

    @Field(() => ServiceRequestSumAggregate, {nullable:true})
    _sum?: ServiceRequestSumAggregate;

    @Field(() => ServiceRequestMinAggregate, {nullable:true})
    _min?: ServiceRequestMinAggregate;

    @Field(() => ServiceRequestMaxAggregate, {nullable:true})
    _max?: ServiceRequestMaxAggregate;
}
