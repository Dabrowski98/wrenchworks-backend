import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { ReviewStatus } from '../../prisma/dto/review-status.enum';
import { ReviewCountAggregate } from './review-count-aggregate.output';
import { ReviewAvgAggregate } from './review-avg-aggregate.output';
import { ReviewSumAggregate } from './review-sum-aggregate.output';
import { ReviewMinAggregate } from './review-min-aggregate.output';
import { ReviewMaxAggregate } from './review-max-aggregate.output';

@ObjectType()
export class ReviewGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reviewId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => GraphQLDecimal, {nullable:false})
    rating!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    originalRating?: Decimal;

    @Field(() => String, {nullable:false})
    reviewText!: string;

    @Field(() => String, {nullable:true})
    originalReviewText?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReviewStatus, {nullable:false})
    status!: keyof typeof ReviewStatus;

    @Field(() => ReviewCountAggregate, {nullable:true})
    _count?: ReviewCountAggregate;

    @Field(() => ReviewAvgAggregate, {nullable:true})
    _avg?: ReviewAvgAggregate;

    @Field(() => ReviewSumAggregate, {nullable:true})
    _sum?: ReviewSumAggregate;

    @Field(() => ReviewMinAggregate, {nullable:true})
    _min?: ReviewMinAggregate;

    @Field(() => ReviewMaxAggregate, {nullable:true})
    _max?: ReviewMaxAggregate;
}
