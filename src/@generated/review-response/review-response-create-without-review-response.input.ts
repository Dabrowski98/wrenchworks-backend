import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ReviewsResponsesStatus } from '../prisma/reviews-responses-status.enum';
import { ReviewResponseCreateNestedManyWithoutReviewResponseInput } from './review-response-create-nested-many-without-review-response.input';
import { Type } from 'class-transformer';
import { ReviewCreateNestedOneWithoutReviewResponsesInput } from '../review/review-create-nested-one-without-review-responses.input';
import { UserCreateNestedOneWithoutReviewResponsesInput } from '../user/user-create-nested-one-without-review-responses.input';

@InputType()
export class ReviewResponseCreateWithoutReviewResponseInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewResponseId?: bigint | number;

    @Field(() => String, {nullable:false})
    responseText!: string;

    @Field(() => Date, {nullable:true})
    responseDate?: Date | string;

    @Field(() => ReviewsResponsesStatus, {nullable:true})
    status?: keyof typeof ReviewsResponsesStatus;

    @Field(() => ReviewResponseCreateNestedManyWithoutReviewResponseInput, {nullable:true})
    @Type(() => ReviewResponseCreateNestedManyWithoutReviewResponseInput)
    otherReviewResponses?: ReviewResponseCreateNestedManyWithoutReviewResponseInput;

    @Field(() => ReviewCreateNestedOneWithoutReviewResponsesInput, {nullable:false})
    @Type(() => ReviewCreateNestedOneWithoutReviewResponsesInput)
    review!: ReviewCreateNestedOneWithoutReviewResponsesInput;

    @Field(() => UserCreateNestedOneWithoutReviewResponsesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutReviewResponsesInput)
    user!: UserCreateNestedOneWithoutReviewResponsesInput;
}
