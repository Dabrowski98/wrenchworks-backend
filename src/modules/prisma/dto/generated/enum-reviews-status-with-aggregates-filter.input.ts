import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewsStatus } from './reviews-status.enum';
import { NestedEnumReviewsStatusWithAggregatesFilter } from './nested-enum-reviews-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumReviewsStatusFilter } from './nested-enum-reviews-status-filter.input';

@InputType()
export class EnumReviewsStatusWithAggregatesFilter {

    @Field(() => ReviewsStatus, {nullable:true})
    equals?: keyof typeof ReviewsStatus;

    @Field(() => [ReviewsStatus], {nullable:true})
    in?: Array<keyof typeof ReviewsStatus>;

    @Field(() => [ReviewsStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewsStatus>;

    @Field(() => NestedEnumReviewsStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumReviewsStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumReviewsStatusFilter, {nullable:true})
    _min?: NestedEnumReviewsStatusFilter;

    @Field(() => NestedEnumReviewsStatusFilter, {nullable:true})
    _max?: NestedEnumReviewsStatusFilter;
}
