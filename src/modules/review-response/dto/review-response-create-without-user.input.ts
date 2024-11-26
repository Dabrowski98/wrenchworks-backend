import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ReviewsResponsesStatus } from '../../prisma/dto/reviews-responses-status.enum';
import { ReviewResponseCreateNestedOneWithoutChildrenResponsesInput } from './review-response-create-nested-one-without-children-responses.input';
import { Type } from 'class-transformer';
import { ReviewResponseCreateNestedManyWithoutParentResponseInput } from './review-response-create-nested-many-without-parent-response.input';
import { ReviewCreateNestedOneWithoutReviewResponsesInput } from '../../review/dto/review-create-nested-one-without-review-responses.input';
import { ValidateNested } from 'class-validator';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class ReviewResponseCreateWithoutUserInput {

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
    status?: keyof typeof ReviewsResponsesStatus;

    @Field(() => ReviewResponseCreateNestedOneWithoutChildrenResponsesInput, {nullable:true})
    @Type(() => ReviewResponseCreateNestedOneWithoutChildrenResponsesInput)
    parentResponse?: ReviewResponseCreateNestedOneWithoutChildrenResponsesInput;

    @HideField()
    childrenResponses?: ReviewResponseCreateNestedManyWithoutParentResponseInput;

    @Field(() => ReviewCreateNestedOneWithoutReviewResponsesInput, {nullable:false})
    @Type(() => ReviewCreateNestedOneWithoutReviewResponsesInput)
    @ValidateNested()
    @Type(() => ReviewCreateNestedOneWithoutReviewResponsesInput)
    review!: ReviewCreateNestedOneWithoutReviewResponsesInput;
}
