import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ReviewResponseStatus } from '../../prisma/dto/review-response-status.enum';
import { ReviewResponseCreateNestedOneWithoutChildrenResponsesInput } from './review-response-create-nested-one-without-children-responses.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateNestedManyWithoutParentResponseInput } from './review-response-create-nested-many-without-parent-response.input';
import { UserCreateNestedOneWithoutReviewResponsesInput } from '../../user/dto/user-create-nested-one-without-review-responses.input';

@InputType()
export class ReviewResponseCreateWithoutReviewInput {

    @HideField()
    reviewResponseId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Response text must be a string' })
    @Validator.Length(0, 5000, { message: 'Response text cannot exceed 5000 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Response text is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    responseText!: string;

    @HideField()
    originalResponseText?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    status?: keyof typeof ReviewResponseStatus;

    @Field(() => ReviewResponseCreateNestedOneWithoutChildrenResponsesInput, {nullable:true})
    @Type(() => ReviewResponseCreateNestedOneWithoutChildrenResponsesInput)
    parentResponse?: ReviewResponseCreateNestedOneWithoutChildrenResponsesInput;

    @HideField()
    childrenResponses?: ReviewResponseCreateNestedManyWithoutParentResponseInput;

    @HideField()
    user!: UserCreateNestedOneWithoutReviewResponsesInput;
}
