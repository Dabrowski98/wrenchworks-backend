import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseStatus } from './review-response-status.enum';
import { NestedEnumReviewResponseStatusWithAggregatesFilter } from './nested-enum-review-response-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumReviewResponseStatusFilter } from './nested-enum-review-response-status-filter.input';

@InputType()
export class EnumReviewResponseStatusWithAggregatesFilter {

    @Field(() => ReviewResponseStatus, {nullable:true})
    equals?: keyof typeof ReviewResponseStatus;

    @Field(() => [ReviewResponseStatus], {nullable:true})
    in?: Array<keyof typeof ReviewResponseStatus>;

    @Field(() => [ReviewResponseStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewResponseStatus>;

    @Field(() => NestedEnumReviewResponseStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumReviewResponseStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumReviewResponseStatusFilter, {nullable:true})
    _min?: NestedEnumReviewResponseStatusFilter;

    @Field(() => NestedEnumReviewResponseStatusFilter, {nullable:true})
    _max?: NestedEnumReviewResponseStatusFilter;
}
