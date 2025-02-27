import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ReviewResponseStatus } from '../../prisma/dto/review-response-status.enum';
import { ReviewResponseUpdateOneWithoutChildrenResponsesNestedInput } from './review-response-update-one-without-children-responses-nested.input';
import { ReviewUpdateOneRequiredWithoutReviewResponsesNestedInput } from '../../review/dto/review-update-one-required-without-review-responses-nested.input';
import { UserUpdateOneRequiredWithoutReviewResponsesNestedInput } from '../../user/dto/user-update-one-required-without-review-responses-nested.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class ReviewResponseUpdateWithoutChildrenResponsesInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Response text must be a string' })
    @Validator.Length(0, 5000, { message: 'Response text cannot exceed 5000 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Response text is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    responseText?: string;

    @Field(() => ReviewResponseStatus, {nullable:true})
    @Validator.IsEnum(ReviewResponseStatus, { message: 'Invalid response status' })
    @Validator.IsOptional()
    status?: keyof typeof ReviewResponseStatus;

    }