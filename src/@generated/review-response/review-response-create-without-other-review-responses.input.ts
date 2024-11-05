import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ReviewsResponsesStatus } from '../prisma/reviews-responses-status.enum';
import { ReviewResponseCreateNestedOneWithoutOtherReviewResponsesInput } from './review-response-create-nested-one-without-other-review-responses.input';
import { Type } from 'class-transformer';
import { ReviewCreateNestedOneWithoutReviewResponsesInput } from '../review/review-create-nested-one-without-review-responses.input';
import { UserCreateNestedOneWithoutReviewResponsesInput } from '../user/user-create-nested-one-without-review-responses.input';

@InputType()
export class ReviewResponseCreateWithoutOtherReviewResponsesInput {

    @HideField()
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

    @Field(() => ReviewCreateNestedOneWithoutReviewResponsesInput, {nullable:false})
    @Type(() => ReviewCreateNestedOneWithoutReviewResponsesInput)
    review!: ReviewCreateNestedOneWithoutReviewResponsesInput;

    @Field(() => UserCreateNestedOneWithoutReviewResponsesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutReviewResponsesInput)
    user!: UserCreateNestedOneWithoutReviewResponsesInput;
}
