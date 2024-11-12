import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseUpdateWithoutOtherReviewResponsesInput } from './review-response-update-without-other-review-responses.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateWithoutOtherReviewResponsesInput } from './review-response-create-without-other-review-responses.input';
import { ReviewResponseWhereInput } from './review-response-where.input';

@InputType()
export class ReviewResponseUpsertWithoutOtherReviewResponsesInput {

    @Field(() => ReviewResponseUpdateWithoutOtherReviewResponsesInput, {nullable:false})
    @Type(() => ReviewResponseUpdateWithoutOtherReviewResponsesInput)
    update!: ReviewResponseUpdateWithoutOtherReviewResponsesInput;

    @Field(() => ReviewResponseCreateWithoutOtherReviewResponsesInput, {nullable:false})
    @Type(() => ReviewResponseCreateWithoutOtherReviewResponsesInput)
    create!: ReviewResponseCreateWithoutOtherReviewResponsesInput;

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    @Type(() => ReviewResponseWhereInput)
    where?: ReviewResponseWhereInput;
}
