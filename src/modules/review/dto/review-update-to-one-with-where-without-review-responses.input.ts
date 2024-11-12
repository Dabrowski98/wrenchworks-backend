import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereInput } from './review-where.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutReviewResponsesInput } from './review-update-without-review-responses.input';

@InputType()
export class ReviewUpdateToOneWithWhereWithoutReviewResponsesInput {

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    where?: ReviewWhereInput;

    @Field(() => ReviewUpdateWithoutReviewResponsesInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutReviewResponsesInput)
    data!: ReviewUpdateWithoutReviewResponsesInput;
}
