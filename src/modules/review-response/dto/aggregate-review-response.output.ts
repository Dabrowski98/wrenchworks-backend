import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReviewResponseCountAggregate } from './review-response-count-aggregate.output';
import { ReviewResponseAvgAggregate } from './review-response-avg-aggregate.output';
import { ReviewResponseSumAggregate } from './review-response-sum-aggregate.output';
import { ReviewResponseMinAggregate } from './review-response-min-aggregate.output';
import { ReviewResponseMaxAggregate } from './review-response-max-aggregate.output';

@ObjectType()
export class AggregateReviewResponse {

    @Field(() => ReviewResponseCountAggregate, {nullable:true})
    _count?: ReviewResponseCountAggregate;

    @Field(() => ReviewResponseAvgAggregate, {nullable:true})
    _avg?: ReviewResponseAvgAggregate;

    @Field(() => ReviewResponseSumAggregate, {nullable:true})
    _sum?: ReviewResponseSumAggregate;

    @Field(() => ReviewResponseMinAggregate, {nullable:true})
    _min?: ReviewResponseMinAggregate;

    @Field(() => ReviewResponseMaxAggregate, {nullable:true})
    _max?: ReviewResponseMaxAggregate;
}
