import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewResponseWhereInput } from './review-response-where.input';
import { Type } from 'class-transformer';
import { ReviewResponseOrderByWithAggregationInput } from './review-response-order-by-with-aggregation.input';
import { ReviewResponseScalarFieldEnum } from './review-response-scalar-field.enum';
import { ReviewResponseScalarWhereWithAggregatesInput } from './review-response-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReviewResponseCountAggregateInput } from './review-response-count-aggregate.input';
import { ReviewResponseAvgAggregateInput } from './review-response-avg-aggregate.input';
import { ReviewResponseSumAggregateInput } from './review-response-sum-aggregate.input';
import { ReviewResponseMinAggregateInput } from './review-response-min-aggregate.input';
import { ReviewResponseMaxAggregateInput } from './review-response-max-aggregate.input';

@ArgsType()
export class ReviewResponseGroupByArgs {

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    @Type(() => ReviewResponseWhereInput)
    where?: ReviewResponseWhereInput;

    @Field(() => [ReviewResponseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReviewResponseOrderByWithAggregationInput>;

    @Field(() => [ReviewResponseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReviewResponseScalarFieldEnum>;

    @Field(() => ReviewResponseScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReviewResponseScalarWhereWithAggregatesInput;

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
