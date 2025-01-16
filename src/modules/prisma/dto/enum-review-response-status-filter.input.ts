import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseStatus } from './review-response-status.enum';
import { NestedEnumReviewResponseStatusFilter } from './nested-enum-review-response-status-filter.input';

@InputType()
export class EnumReviewResponseStatusFilter {

    @Field(() => ReviewResponseStatus, {nullable:true})
    equals?: keyof typeof ReviewResponseStatus;

    @Field(() => [ReviewResponseStatus], {nullable:true})
    in?: Array<keyof typeof ReviewResponseStatus>;

    @Field(() => [ReviewResponseStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewResponseStatus>;

    @Field(() => NestedEnumReviewResponseStatusFilter, {nullable:true})
    not?: NestedEnumReviewResponseStatusFilter;
}
