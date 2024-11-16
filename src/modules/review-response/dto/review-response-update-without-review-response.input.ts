import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ReviewsResponsesStatus } from '../../prisma/dto/reviews-responses-status.enum';
import { ReviewResponseUpdateManyWithoutReviewResponseNestedInput } from './review-response-update-many-without-review-response-nested.input';
import { Type } from 'class-transformer';
import { ReviewUpdateOneRequiredWithoutReviewResponsesNestedInput } from '../../review/dto/review-update-one-required-without-review-responses-nested.input';
import { UserUpdateOneRequiredWithoutReviewResponsesNestedInput } from '../../user/dto/user-update-one-required-without-review-responses-nested.input';
import { CREATE, UPDATE } from 'src/constants/validation-groups';


@InputType()
export class ReviewResponseUpdateWithoutReviewResponseInput {

    @HideField()
    reviewResponseId?: bigint | number;

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

    @Field(() => ReviewResponseUpdateManyWithoutReviewResponseNestedInput, {nullable:true})
    @Type(() => ReviewResponseUpdateManyWithoutReviewResponseNestedInput)
    otherReviewResponses?: ReviewResponseUpdateManyWithoutReviewResponseNestedInput;

    @Field(() => ReviewUpdateOneRequiredWithoutReviewResponsesNestedInput, {nullable:true})
    @Type(() => ReviewUpdateOneRequiredWithoutReviewResponsesNestedInput)
    review?: ReviewUpdateOneRequiredWithoutReviewResponsesNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutReviewResponsesNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutReviewResponsesNestedInput)
    user?: UserUpdateOneRequiredWithoutReviewResponsesNestedInput;
}
