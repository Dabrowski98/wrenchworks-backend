import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewsStatus } from './reviews-status.enum';

@InputType()
export class NestedEnumReviewsStatusFilter {

    @Field(() => ReviewsStatus, {nullable:true})
    equals?: keyof typeof ReviewsStatus;

    @Field(() => [ReviewsStatus], {nullable:true})
    in?: Array<keyof typeof ReviewsStatus>;

    @Field(() => [ReviewsStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewsStatus>;

    @Field(() => NestedEnumReviewsStatusFilter, {nullable:true})
    not?: NestedEnumReviewsStatusFilter;
}
