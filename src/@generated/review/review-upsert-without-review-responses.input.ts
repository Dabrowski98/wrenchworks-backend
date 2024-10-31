import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewUpdateWithoutReviewResponsesInput } from './review-update-without-review-responses.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutReviewResponsesInput } from './review-create-without-review-responses.input';
import { ReviewWhereInput } from './review-where.input';

@InputType()
export class ReviewUpsertWithoutReviewResponsesInput {

    @Field(() => ReviewUpdateWithoutReviewResponsesInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutReviewResponsesInput)
    update!: ReviewUpdateWithoutReviewResponsesInput;

    @Field(() => ReviewCreateWithoutReviewResponsesInput, {nullable:false})
    @Type(() => ReviewCreateWithoutReviewResponsesInput)
    create!: ReviewCreateWithoutReviewResponsesInput;

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: ReviewWhereInput;
}
