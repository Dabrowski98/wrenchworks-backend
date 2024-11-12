import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewResponseUpdateWithoutReviewInput } from './review-response-update-without-review.input';
import { ReviewResponseCreateWithoutReviewInput } from './review-response-create-without-review.input';

@InputType()
export class ReviewResponseUpsertWithWhereUniqueWithoutReviewInput {

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:false})
    @Type(() => ReviewResponseWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => ReviewResponseUpdateWithoutReviewInput, {nullable:false})
    @Type(() => ReviewResponseUpdateWithoutReviewInput)
    update!: ReviewResponseUpdateWithoutReviewInput;

    @Field(() => ReviewResponseCreateWithoutReviewInput, {nullable:false})
    @Type(() => ReviewResponseCreateWithoutReviewInput)
    create!: ReviewResponseCreateWithoutReviewInput;
}
