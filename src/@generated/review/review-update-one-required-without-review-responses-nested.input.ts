import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutReviewResponsesInput } from './review-create-without-review-responses.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutReviewResponsesInput } from './review-create-or-connect-without-review-responses.input';
import { ReviewUpsertWithoutReviewResponsesInput } from './review-upsert-without-review-responses.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateToOneWithWhereWithoutReviewResponsesInput } from './review-update-to-one-with-where-without-review-responses.input';

@InputType()
export class ReviewUpdateOneRequiredWithoutReviewResponsesNestedInput {

    @Field(() => ReviewCreateWithoutReviewResponsesInput, {nullable:true})
    @Type(() => ReviewCreateWithoutReviewResponsesInput)
    create?: ReviewCreateWithoutReviewResponsesInput;

    @Field(() => ReviewCreateOrConnectWithoutReviewResponsesInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutReviewResponsesInput)
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewResponsesInput;

    @Field(() => ReviewUpsertWithoutReviewResponsesInput, {nullable:true})
    @Type(() => ReviewUpsertWithoutReviewResponsesInput)
    upsert?: ReviewUpsertWithoutReviewResponsesInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewWhereUniqueInput, 'reviewId'>;

    @Field(() => ReviewUpdateToOneWithWhereWithoutReviewResponsesInput, {nullable:true})
    @Type(() => ReviewUpdateToOneWithWhereWithoutReviewResponsesInput)
    update?: ReviewUpdateToOneWithWhereWithoutReviewResponsesInput;
}
