import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ReviewsResponsesStatus } from '../../prisma/dto/reviews-responses-status.enum';
import { ReviewResponseUpdateOneWithoutOtherReviewResponsesNestedInput } from './review-response-update-one-without-other-review-responses-nested.input';
import { Type } from 'class-transformer';
import { ReviewResponseUpdateManyWithoutReviewResponseNestedInput } from './review-response-update-many-without-review-response-nested.input';
import { ReviewUpdateOneRequiredWithoutReviewResponsesNestedInput } from '../../review/dto/review-update-one-required-without-review-responses-nested.input';
import { UserUpdateOneRequiredWithoutReviewResponsesNestedInput } from '../../user/dto/user-update-one-required-without-review-responses-nested.input';
import { CREATE, UPDATE } from 'src/constants/validation-groups';


@InputType()
export class ReviewResponseUpdateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Response text must be a string' })
    @Validator.IsOptional()
    @Validator.Length(0, 5000, { message: 'Response text cannot exceed 5000 characters' })
    responseText?: string;

    @Field(() => ReviewsResponsesStatus, {nullable:true})
    @Validator.IsEnum(ReviewsResponsesStatus, { message: 'Invalid response status' })
    @Validator.IsOptional()
    status?: keyof typeof ReviewsResponsesStatus;
}
