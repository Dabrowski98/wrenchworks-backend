import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewsResponsesStatus } from './reviews-responses-status.enum';
import { NestedEnumReviewsResponsesStatusWithAggregatesFilter } from './nested-enum-reviews-responses-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumReviewsResponsesStatusFilter } from './nested-enum-reviews-responses-status-filter.input';

@InputType()
export class EnumReviewsResponsesStatusWithAggregatesFilter {

    @Field(() => ReviewsResponsesStatus, {nullable:true})
    equals?: keyof typeof ReviewsResponsesStatus;

    @Field(() => [ReviewsResponsesStatus], {nullable:true})
    in?: Array<keyof typeof ReviewsResponsesStatus>;

    @Field(() => [ReviewsResponsesStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewsResponsesStatus>;

    @Field(() => NestedEnumReviewsResponsesStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumReviewsResponsesStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumReviewsResponsesStatusFilter, {nullable:true})
    _min?: NestedEnumReviewsResponsesStatusFilter;

    @Field(() => NestedEnumReviewsResponsesStatusFilter, {nullable:true})
    _max?: NestedEnumReviewsResponsesStatusFilter;
}
