import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SessionDataCountAggregate } from './session-data-count-aggregate.output';
import { SessionDataAvgAggregate } from './session-data-avg-aggregate.output';
import { SessionDataSumAggregate } from './session-data-sum-aggregate.output';
import { SessionDataMinAggregate } from './session-data-min-aggregate.output';
import { SessionDataMaxAggregate } from './session-data-max-aggregate.output';

@ObjectType()
export class AggregateSessionData {

    @Field(() => SessionDataCountAggregate, {nullable:true})
    _count?: SessionDataCountAggregate;

    @Field(() => SessionDataAvgAggregate, {nullable:true})
    _avg?: SessionDataAvgAggregate;

    @Field(() => SessionDataSumAggregate, {nullable:true})
    _sum?: SessionDataSumAggregate;

    @Field(() => SessionDataMinAggregate, {nullable:true})
    _min?: SessionDataMinAggregate;

    @Field(() => SessionDataMaxAggregate, {nullable:true})
    _max?: SessionDataMaxAggregate;
}
