import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ReviewsResponsesStatus } from '../prisma/reviews-responses-status.enum';
import { ReviewResponseCreateNestedOneWithoutOtherReviewResponsesInput } from './review-response-create-nested-one-without-other-review-responses.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateNestedManyWithoutReviewResponseInput } from './review-response-create-nested-many-without-review-response.input';
import { UserCreateNestedOneWithoutReviewResponsesInput } from '../user/user-create-nested-one-without-review-responses.input';

@InputType()
export class ReviewResponseCreateWithoutReviewInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewResponseId?: bigint | number;

    @Field(() => String, {nullable:false})
    responseText!: string;

    @Field(() => Date, {nullable:true})
    responseDate?: Date | string;

    @Field(() => ReviewsResponsesStatus, {nullable:true})
    status?: keyof typeof ReviewsResponsesStatus;

    @Field(() => ReviewResponseCreateNestedOneWithoutOtherReviewResponsesInput, {nullable:true})
    @Type(() => ReviewResponseCreateNestedOneWithoutOtherReviewResponsesInput)
    reviewResponse?: ReviewResponseCreateNestedOneWithoutOtherReviewResponsesInput;

    @Field(() => ReviewResponseCreateNestedManyWithoutReviewResponseInput, {nullable:true})
    @Type(() => ReviewResponseCreateNestedManyWithoutReviewResponseInput)
    otherReviewResponses?: ReviewResponseCreateNestedManyWithoutReviewResponseInput;

    @Field(() => UserCreateNestedOneWithoutReviewResponsesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutReviewResponsesInput)
    user!: UserCreateNestedOneWithoutReviewResponsesInput;
}
