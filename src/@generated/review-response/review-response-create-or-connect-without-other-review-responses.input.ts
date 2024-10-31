import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateWithoutOtherReviewResponsesInput } from './review-response-create-without-other-review-responses.input';

@InputType()
export class ReviewResponseCreateOrConnectWithoutOtherReviewResponsesInput {

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:false})
    @Type(() => ReviewResponseWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => ReviewResponseCreateWithoutOtherReviewResponsesInput, {nullable:false})
    @Type(() => ReviewResponseCreateWithoutOtherReviewResponsesInput)
    create!: ReviewResponseCreateWithoutOtherReviewResponsesInput;
}
