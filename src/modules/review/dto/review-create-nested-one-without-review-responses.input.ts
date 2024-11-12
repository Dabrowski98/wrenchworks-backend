import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutReviewResponsesInput } from './review-create-without-review-responses.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutReviewResponsesInput } from './review-create-or-connect-without-review-responses.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedOneWithoutReviewResponsesInput {

    @Field(() => ReviewCreateWithoutReviewResponsesInput, {nullable:true})
    @Type(() => ReviewCreateWithoutReviewResponsesInput)
    create?: ReviewCreateWithoutReviewResponsesInput;

    @Field(() => ReviewCreateOrConnectWithoutReviewResponsesInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutReviewResponsesInput)
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewResponsesInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>;
}
