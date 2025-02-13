import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { ReviewResponseStatus } from '../../prisma/dto/review-response-status.enum';
import { ReviewResponseUncheckedCreateNestedManyWithoutParentResponseInput } from './review-response-unchecked-create-nested-many-without-parent-response.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewResponseUncheckedCreateWithoutParentResponseInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewResponseId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reviewId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Response text must be a string' })
    @Validator.Length(0, 5000, { message: 'Response text cannot exceed 5000 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Response text is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    responseText!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    originalResponseText?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => ReviewResponseStatus, {nullable:true})
    @Validator.IsEnum(ReviewResponseStatus, { message: 'Invalid response status' })
    @Validator.IsOptional()
    status?: keyof typeof ReviewResponseStatus;

    @Field(() => ReviewResponseUncheckedCreateNestedManyWithoutParentResponseInput, {nullable:true})
    @Type(() => ReviewResponseUncheckedCreateNestedManyWithoutParentResponseInput)
    childrenResponses?: ReviewResponseUncheckedCreateNestedManyWithoutParentResponseInput;
}
