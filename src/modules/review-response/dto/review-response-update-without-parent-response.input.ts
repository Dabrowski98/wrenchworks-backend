import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ReviewsResponsesStatus } from '../../prisma/dto/reviews-responses-status.enum';
import { ReviewResponseUpdateManyWithoutParentResponseNestedInput } from './review-response-update-many-without-parent-response-nested.input';
import { ReviewUpdateOneRequiredWithoutReviewResponsesNestedInput } from '../../review/dto/review-update-one-required-without-review-responses-nested.input';
import { UserUpdateOneRequiredWithoutReviewResponsesNestedInput } from '../../user/dto/user-update-one-required-without-review-responses-nested.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class ReviewResponseUpdateWithoutParentResponseInput {

    @HideField()
    reviewResponseId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Response text must be a string' })
    @Validator.Length(0, 5000, { message: 'Response text cannot exceed 5000 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Response text is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    responseText?: string;

    @HideField()
    originalResponseText?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => ReviewsResponsesStatus, {nullable:true})
    @Validator.IsEnum(ReviewsResponsesStatus, { message: 'Invalid response status' })
    @Validator.IsOptional()
    status?: keyof typeof ReviewsResponsesStatus;

    @HideField()
    childrenResponses?: ReviewResponseUpdateManyWithoutParentResponseNestedInput;

    @HideField()
    review?: ReviewUpdateOneRequiredWithoutReviewResponsesNestedInput;

    @HideField()
    user?: UserUpdateOneRequiredWithoutReviewResponsesNestedInput;
}