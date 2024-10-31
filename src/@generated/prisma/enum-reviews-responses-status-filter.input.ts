import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewsResponsesStatus } from './reviews-responses-status.enum';
import { NestedEnumReviewsResponsesStatusFilter } from './nested-enum-reviews-responses-status-filter.input';

@InputType()
export class EnumReviewsResponsesStatusFilter {

    @Field(() => ReviewsResponsesStatus, {nullable:true})
    equals?: keyof typeof ReviewsResponsesStatus;

    @Field(() => [ReviewsResponsesStatus], {nullable:true})
    in?: Array<keyof typeof ReviewsResponsesStatus>;

    @Field(() => [ReviewsResponsesStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewsResponsesStatus>;

    @Field(() => NestedEnumReviewsResponsesStatusFilter, {nullable:true})
    not?: NestedEnumReviewsResponsesStatusFilter;
}
