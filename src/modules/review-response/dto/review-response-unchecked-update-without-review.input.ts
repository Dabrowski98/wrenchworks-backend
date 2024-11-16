import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ReviewsResponsesStatus } from '../../prisma/dto/reviews-responses-status.enum';
import { ReviewResponseUncheckedUpdateManyWithoutReviewResponseNestedInput } from './review-response-unchecked-update-many-without-review-response-nested.input';
import { Type } from 'class-transformer';
import { CREATE, UPDATE } from 'src/constants/validation-groups';


@InputType()
export class ReviewResponseUncheckedUpdateWithoutReviewInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewResponseId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    parentResponseId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Response text must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Response text is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(0, 5000, { message: 'Response text cannot exceed 5000 characters' })
    responseText?: string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Response date must be a valid date' })
    responseDate?: Date | string;

    @Field(() => ReviewsResponsesStatus, {nullable:true})
    @Validator.IsEnum(ReviewsResponsesStatus, { message: 'Invalid response status' })
    status?: keyof typeof ReviewsResponsesStatus;

    @Field(() => ReviewResponseUncheckedUpdateManyWithoutReviewResponseNestedInput, {nullable:true})
    @Type(() => ReviewResponseUncheckedUpdateManyWithoutReviewResponseNestedInput)
    otherReviewResponses?: ReviewResponseUncheckedUpdateManyWithoutReviewResponseNestedInput;
}
