import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutReviewResponsesInput } from './review-create-without-review-responses.input';
import { HideField } from '@nestjs/graphql';
import { ReviewCreateOrConnectWithoutReviewResponsesInput } from './review-create-or-connect-without-review-responses.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class ReviewCreateNestedOneWithoutReviewResponsesInput {

    @HideField()
    create?: ReviewCreateWithoutReviewResponsesInput;

    @HideField()
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewResponsesInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>;
}
