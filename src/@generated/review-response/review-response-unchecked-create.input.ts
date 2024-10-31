import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ReviewsResponsesStatus } from '../prisma/reviews-responses-status.enum';
import { ReviewResponseUncheckedCreateNestedManyWithoutReviewResponseInput } from './review-response-unchecked-create-nested-many-without-review-response.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewResponseUncheckedCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewResponseId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reviewId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    parentResponseId?: bigint | number;

    @Field(() => String, {nullable:false})
    responseText!: string;

    @Field(() => Date, {nullable:true})
    responseDate?: Date | string;

    @Field(() => ReviewsResponsesStatus, {nullable:true})
    status?: keyof typeof ReviewsResponsesStatus;

    @Field(() => ReviewResponseUncheckedCreateNestedManyWithoutReviewResponseInput, {nullable:true})
    @Type(() => ReviewResponseUncheckedCreateNestedManyWithoutReviewResponseInput)
    otherReviewResponses?: ReviewResponseUncheckedCreateNestedManyWithoutReviewResponseInput;
}
