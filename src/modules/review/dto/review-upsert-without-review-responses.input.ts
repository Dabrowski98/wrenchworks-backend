import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewUpdateWithoutReviewResponsesInput } from './review-update-without-review-responses.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ReviewCreateWithoutReviewResponsesInput } from './review-create-without-review-responses.input';
import { ReviewWhereInput } from './review-where.input';

@InputType()
export class ReviewUpsertWithoutReviewResponsesInput {

    @Field(() => ReviewUpdateWithoutReviewResponsesInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutReviewResponsesInput)
    @ValidateNested()
    update!: ReviewUpdateWithoutReviewResponsesInput;

    @Field(() => ReviewCreateWithoutReviewResponsesInput, {nullable:false})
    @Type(() => ReviewCreateWithoutReviewResponsesInput)
    @ValidateNested()
    create!: ReviewCreateWithoutReviewResponsesInput;

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: ReviewWhereInput;
}
