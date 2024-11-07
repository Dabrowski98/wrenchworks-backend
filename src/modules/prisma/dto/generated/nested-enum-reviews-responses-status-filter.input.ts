import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewsResponsesStatus } from './reviews-responses-status.enum';

@InputType()
export class NestedEnumReviewsResponsesStatusFilter {

    @Field(() => ReviewsResponsesStatus, {nullable:true})
    equals?: keyof typeof ReviewsResponsesStatus;

    @Field(() => [ReviewsResponsesStatus], {nullable:true})
    in?: Array<keyof typeof ReviewsResponsesStatus>;

    @Field(() => [ReviewsResponsesStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewsResponsesStatus>;

    @Field(() => NestedEnumReviewsResponsesStatusFilter, {nullable:true})
    not?: NestedEnumReviewsResponsesStatusFilter;
}
