import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseStatus } from './review-response-status.enum';

@InputType()
export class NestedEnumReviewResponseStatusFilter {

    @Field(() => ReviewResponseStatus, {nullable:true})
    equals?: keyof typeof ReviewResponseStatus;

    @Field(() => [ReviewResponseStatus], {nullable:true})
    in?: Array<keyof typeof ReviewResponseStatus>;

    @Field(() => [ReviewResponseStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewResponseStatus>;

    @Field(() => NestedEnumReviewResponseStatusFilter, {nullable:true})
    not?: NestedEnumReviewResponseStatusFilter;
}
