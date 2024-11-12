import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewWhereInput } from './review-where.input';
import { Type } from 'class-transformer';
import { ReviewOrderByWithAggregationInput } from './review-order-by-with-aggregation.input';
import { ReviewScalarFieldEnum } from './review-scalar-field.enum';
import { ReviewScalarWhereWithAggregatesInput } from './review-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReviewCountAggregateInput } from './review-count-aggregate.input';
import { ReviewAvgAggregateInput } from './review-avg-aggregate.input';
import { ReviewSumAggregateInput } from './review-sum-aggregate.input';
import { ReviewMinAggregateInput } from './review-min-aggregate.input';
import { ReviewMaxAggregateInput } from './review-max-aggregate.input';

@ArgsType()
export class ReviewGroupByArgs {

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: ReviewWhereInput;

    @Field(() => [ReviewOrderByWithAggregationInput], {nullable:true})
    @Type(() => ReviewOrderByWithAggregationInput)
    orderBy?: Array<ReviewOrderByWithAggregationInput>;

    @Field(() => [ReviewScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReviewScalarFieldEnum>;

    @Field(() => ReviewScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => ReviewScalarWhereWithAggregatesInput)
    having?: ReviewScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewCountAggregateInput, {nullable:true})
    @Type(() => ReviewCountAggregateInput)
    _count?: ReviewCountAggregateInput;

    @Field(() => ReviewAvgAggregateInput, {nullable:true})
    @Type(() => ReviewAvgAggregateInput)
    _avg?: ReviewAvgAggregateInput;

    @Field(() => ReviewSumAggregateInput, {nullable:true})
    @Type(() => ReviewSumAggregateInput)
    _sum?: ReviewSumAggregateInput;

    @Field(() => ReviewMinAggregateInput, {nullable:true})
    @Type(() => ReviewMinAggregateInput)
    _min?: ReviewMinAggregateInput;

    @Field(() => ReviewMaxAggregateInput, {nullable:true})
    @Type(() => ReviewMaxAggregateInput)
    _max?: ReviewMaxAggregateInput;
}
