import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateWithoutReviewResponseInput } from './review-response-create-without-review-response.input';

@InputType()
export class ReviewResponseCreateOrConnectWithoutReviewResponseInput {

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:false})
    @Type(() => ReviewResponseWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => ReviewResponseCreateWithoutReviewResponseInput, {nullable:false})
    @Type(() => ReviewResponseCreateWithoutReviewResponseInput)
    create!: ReviewResponseCreateWithoutReviewResponseInput;
}
