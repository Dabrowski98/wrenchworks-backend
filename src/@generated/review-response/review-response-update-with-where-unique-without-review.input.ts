import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewResponseUpdateWithoutReviewInput } from './review-response-update-without-review.input';

@InputType()
export class ReviewResponseUpdateWithWhereUniqueWithoutReviewInput {

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:false})
    @Type(() => ReviewResponseWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => ReviewResponseUpdateWithoutReviewInput, {nullable:false})
    @Type(() => ReviewResponseUpdateWithoutReviewInput)
    data!: ReviewResponseUpdateWithoutReviewInput;
}
