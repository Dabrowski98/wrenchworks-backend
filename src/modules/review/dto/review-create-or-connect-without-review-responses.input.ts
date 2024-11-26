import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutReviewResponsesInput } from './review-create-without-review-responses.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class ReviewCreateOrConnectWithoutReviewResponsesInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>;

    @Field(() => ReviewCreateWithoutReviewResponsesInput, {nullable:false})
    @Type(() => ReviewCreateWithoutReviewResponsesInput)
    @ValidateNested()
    create!: ReviewCreateWithoutReviewResponsesInput;
}
