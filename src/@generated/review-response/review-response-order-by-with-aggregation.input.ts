import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ReviewResponseCountOrderByAggregateInput } from './review-response-count-order-by-aggregate.input';
import { ReviewResponseAvgOrderByAggregateInput } from './review-response-avg-order-by-aggregate.input';
import { ReviewResponseMaxOrderByAggregateInput } from './review-response-max-order-by-aggregate.input';
import { ReviewResponseMinOrderByAggregateInput } from './review-response-min-order-by-aggregate.input';
import { ReviewResponseSumOrderByAggregateInput } from './review-response-sum-order-by-aggregate.input';

@InputType()
export class ReviewResponseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    reviewResponseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    parentResponseId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    responseText?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    responseDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => ReviewResponseCountOrderByAggregateInput, {nullable:true})
    _count?: ReviewResponseCountOrderByAggregateInput;

    @Field(() => ReviewResponseAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReviewResponseAvgOrderByAggregateInput;

    @Field(() => ReviewResponseMaxOrderByAggregateInput, {nullable:true})
    _max?: ReviewResponseMaxOrderByAggregateInput;

    @Field(() => ReviewResponseMinOrderByAggregateInput, {nullable:true})
    _min?: ReviewResponseMinOrderByAggregateInput;

    @Field(() => ReviewResponseSumOrderByAggregateInput, {nullable:true})
    _sum?: ReviewResponseSumOrderByAggregateInput;
}
