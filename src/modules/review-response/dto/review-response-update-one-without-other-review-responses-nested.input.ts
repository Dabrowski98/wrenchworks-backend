import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateWithoutOtherReviewResponsesInput } from './review-response-create-without-other-review-responses.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateOrConnectWithoutOtherReviewResponsesInput } from './review-response-create-or-connect-without-other-review-responses.input';
import { ReviewResponseUpsertWithoutOtherReviewResponsesInput } from './review-response-upsert-without-other-review-responses.input';
import { ReviewResponseWhereInput } from './review-response-where.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';
import { ReviewResponseUpdateToOneWithWhereWithoutOtherReviewResponsesInput } from './review-response-update-to-one-with-where-without-other-review-responses.input';

@InputType()
export class ReviewResponseUpdateOneWithoutOtherReviewResponsesNestedInput {

    @Field(() => ReviewResponseCreateWithoutOtherReviewResponsesInput, {nullable:true})
    @Type(() => ReviewResponseCreateWithoutOtherReviewResponsesInput)
    create?: ReviewResponseCreateWithoutOtherReviewResponsesInput;

    @Field(() => ReviewResponseCreateOrConnectWithoutOtherReviewResponsesInput, {nullable:true})
    @Type(() => ReviewResponseCreateOrConnectWithoutOtherReviewResponsesInput)
    connectOrCreate?: ReviewResponseCreateOrConnectWithoutOtherReviewResponsesInput;

    @Field(() => ReviewResponseUpsertWithoutOtherReviewResponsesInput, {nullable:true})
    @Type(() => ReviewResponseUpsertWithoutOtherReviewResponsesInput)
    upsert?: ReviewResponseUpsertWithoutOtherReviewResponsesInput;

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    @Type(() => ReviewResponseWhereInput)
    disconnect?: ReviewResponseWhereInput;

    @Field(() => ReviewResponseWhereInput, {nullable:true})
    @Type(() => ReviewResponseWhereInput)
    delete?: ReviewResponseWhereInput;

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;

    @Field(() => ReviewResponseUpdateToOneWithWhereWithoutOtherReviewResponsesInput, {nullable:true})
    @Type(() => ReviewResponseUpdateToOneWithWhereWithoutOtherReviewResponsesInput)
    update?: ReviewResponseUpdateToOneWithWhereWithoutOtherReviewResponsesInput;
}
