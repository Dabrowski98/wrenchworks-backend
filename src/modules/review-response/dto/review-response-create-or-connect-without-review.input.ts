import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateWithoutReviewInput } from './review-response-create-without-review.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class ReviewResponseCreateOrConnectWithoutReviewInput {

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:false})
    @Type(() => ReviewResponseWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => ReviewResponseCreateWithoutReviewInput, {nullable:false})
    @Type(() => ReviewResponseCreateWithoutReviewInput)
    @ValidateNested()
    create!: ReviewResponseCreateWithoutReviewInput;
}
