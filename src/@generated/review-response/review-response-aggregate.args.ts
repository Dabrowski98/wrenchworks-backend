import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewResponseWhereInput } from './review-response-where.input';
import { Type } from 'class-transformer';
import { ReviewResponseOrderByWithRelationInput } from './review-response-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewResponseCountAggregateInput } from './review-response-count-aggregate.input';
import { ReviewResponseAvgAggregateInput } from './review-response-avg-aggregate.input';
import { ReviewResponseSumAggregateInput } from './review-response-sum-aggregate.input';
import { ReviewResponseMinAggregateInput } from './review-response-min-aggregate.input';
import { ReviewResponseMaxAggregateInput } from './review-response-max-aggregate.input';

@ArgsType()
export class ReviewResponseAggregateArgs {

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    @Type(() => ReviewResponseWhereInput)
    where?: ReviewResponseWhereInput;

    @Field(() => [ReviewResponseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewResponseOrderByWithRelationInput>;

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewResponseCountAggregateInput, {nullable:true})
    _count?: ReviewResponseCountAggregateInput;

    @Field(() => ReviewResponseAvgAggregateInput, {nullable:true})
    _avg?: ReviewResponseAvgAggregateInput;

    @Field(() => ReviewResponseSumAggregateInput, {nullable:true})
    _sum?: ReviewResponseSumAggregateInput;

    @Field(() => ReviewResponseMinAggregateInput, {nullable:true})
    _min?: ReviewResponseMinAggregateInput;

    @Field(() => ReviewResponseMaxAggregateInput, {nullable:true})
    _max?: ReviewResponseMaxAggregateInput;
}
