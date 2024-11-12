import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { ReviewCountOrderByAggregateInput } from './review-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { ReviewAvgOrderByAggregateInput } from './review-avg-order-by-aggregate.input';
import { ReviewMaxOrderByAggregateInput } from './review-max-order-by-aggregate.input';
import { ReviewMinOrderByAggregateInput } from './review-min-order-by-aggregate.input';
import { ReviewSumOrderByAggregateInput } from './review-sum-order-by-aggregate.input';

@InputType()
export class ReviewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewText?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => ReviewCountOrderByAggregateInput, {nullable:true})
    @Type(() => ReviewCountOrderByAggregateInput)
    _count?: ReviewCountOrderByAggregateInput;

    @Field(() => ReviewAvgOrderByAggregateInput, {nullable:true})
    @Type(() => ReviewAvgOrderByAggregateInput)
    _avg?: ReviewAvgOrderByAggregateInput;

    @Field(() => ReviewMaxOrderByAggregateInput, {nullable:true})
    @Type(() => ReviewMaxOrderByAggregateInput)
    _max?: ReviewMaxOrderByAggregateInput;

    @Field(() => ReviewMinOrderByAggregateInput, {nullable:true})
    @Type(() => ReviewMinOrderByAggregateInput)
    _min?: ReviewMinOrderByAggregateInput;

    @Field(() => ReviewSumOrderByAggregateInput, {nullable:true})
    @Type(() => ReviewSumOrderByAggregateInput)
    _sum?: ReviewSumOrderByAggregateInput;
}
