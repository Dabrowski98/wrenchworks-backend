import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ReviewsResponsesStatus } from '../../prisma/dto/reviews-responses-status.enum';
import { ReviewResponseCountAggregate } from './review-response-count-aggregate.output';
import { ReviewResponseAvgAggregate } from './review-response-avg-aggregate.output';
import { ReviewResponseSumAggregate } from './review-response-sum-aggregate.output';
import { ReviewResponseMinAggregate } from './review-response-min-aggregate.output';
import { ReviewResponseMaxAggregate } from './review-response-max-aggregate.output';

@ObjectType()
export class ReviewResponseGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reviewResponseId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reviewId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    parentResponseId?: bigint | number;

    @Field(() => String, {nullable:false})
    responseText!: string;

    @Field(() => String, {nullable:true})
    originalResponseText?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReviewsResponsesStatus, {nullable:false})
    status!: keyof typeof ReviewsResponsesStatus;

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
