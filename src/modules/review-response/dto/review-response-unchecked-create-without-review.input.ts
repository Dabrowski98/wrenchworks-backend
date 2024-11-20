import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ReviewsResponsesStatus } from '../../prisma/dto/reviews-responses-status.enum';
import { ReviewResponseUncheckedCreateNestedManyWithoutReviewResponseInput } from './review-response-unchecked-create-nested-many-without-review-response.input';
import { Type } from 'class-transformer';


@InputType()
export class ReviewResponseUncheckedCreateWithoutReviewInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewResponseId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    parentResponseId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Response text must be a string' })
    @Validator.IsNotEmpty({ message: 'Response text is required' })
    @Validator.Length(0, 5000, { message: 'Response text cannot exceed 5000 characters' })
    responseText!: string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Response date must be a valid date' })
    responseDate?: Date | string;

    @Field(() => ReviewsResponsesStatus, {nullable:true})
    @Validator.IsEnum(ReviewsResponsesStatus, { message: 'Invalid response status' })
    status?: keyof typeof ReviewsResponsesStatus;

    @Field(() => ReviewResponseUncheckedCreateNestedManyWithoutReviewResponseInput, {nullable:true})
    @Type(() => ReviewResponseUncheckedCreateNestedManyWithoutReviewResponseInput)
    otherReviewResponses?: ReviewResponseUncheckedCreateNestedManyWithoutReviewResponseInput;
}
