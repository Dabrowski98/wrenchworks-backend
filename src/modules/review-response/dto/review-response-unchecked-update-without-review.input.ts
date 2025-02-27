import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { ReviewResponseStatus } from '../../prisma/dto/review-response-status.enum';
import { ReviewResponseUncheckedUpdateManyWithoutParentResponseNestedInput } from './review-response-unchecked-update-many-without-parent-response-nested.input';
import { Type } from 'class-transformer';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class ReviewResponseUncheckedUpdateWithoutReviewInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewResponseId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    parentResponseId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Response text must be a string' })
    @Validator.Length(0, 5000, { message: 'Response text cannot exceed 5000 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Response text is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    responseText?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    originalResponseText?: string;

    @Field(() => ReviewResponseStatus, {nullable:true})
    @Validator.IsEnum(ReviewResponseStatus, { message: 'Invalid response status' })
    @Validator.IsOptional()
    status?: keyof typeof ReviewResponseStatus;

    @Field(() => ReviewResponseUncheckedUpdateManyWithoutParentResponseNestedInput, {nullable:true})
    @Type(() => ReviewResponseUncheckedUpdateManyWithoutParentResponseNestedInput)
    childrenResponses?: ReviewResponseUncheckedUpdateManyWithoutParentResponseNestedInput;
}