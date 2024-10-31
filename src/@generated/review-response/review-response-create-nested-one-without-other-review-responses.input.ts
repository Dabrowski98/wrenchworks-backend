import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewResponseCreateWithoutOtherReviewResponsesInput } from './review-response-create-without-other-review-responses.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateOrConnectWithoutOtherReviewResponsesInput } from './review-response-create-or-connect-without-other-review-responses.input';
import { Prisma } from '@prisma/client';
import { ReviewResponseWhereUniqueInput } from './review-response-where-unique.input';

@InputType()
export class ReviewResponseCreateNestedOneWithoutOtherReviewResponsesInput {

    @Field(() => ReviewResponseCreateWithoutOtherReviewResponsesInput, {nullable:true})
    @Type(() => ReviewResponseCreateWithoutOtherReviewResponsesInput)
    create?: ReviewResponseCreateWithoutOtherReviewResponsesInput;

    @Field(() => ReviewResponseCreateOrConnectWithoutOtherReviewResponsesInput, {nullable:true})
    @Type(() => ReviewResponseCreateOrConnectWithoutOtherReviewResponsesInput)
    connectOrCreate?: ReviewResponseCreateOrConnectWithoutOtherReviewResponsesInput;

    @Field(() => ReviewResponseWhereUniqueInput, {nullable:true})
    @Type(() => ReviewResponseWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewResponseWhereUniqueInput, 'reviewResponseId'>;
}
