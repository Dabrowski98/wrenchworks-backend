import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseWhereInput } from './review-response-where.input';
import { Type } from 'class-transformer';
import { ReviewResponseUpdateWithoutOtherReviewResponsesInput } from './review-response-update-without-other-review-responses.input';

@InputType()
export class ReviewResponseUpdateToOneWithWhereWithoutOtherReviewResponsesInput {

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    @Type(() => ReviewResponseWhereInput)
    where?: ReviewResponseWhereInput;

    @Field(() => ReviewResponseUpdateWithoutOtherReviewResponsesInput, {nullable:false})
    @Type(() => ReviewResponseUpdateWithoutOtherReviewResponsesInput)
    data!: ReviewResponseUpdateWithoutOtherReviewResponsesInput;
}
