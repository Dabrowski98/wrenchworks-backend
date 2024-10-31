import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumReviewsResponsesStatusFieldUpdateOperationsInput } from '../prisma/enum-reviews-responses-status-field-update-operations.input';
import { ReviewResponseUpdateOneWithoutOtherReviewResponsesNestedInput } from './review-response-update-one-without-other-review-responses-nested.input';
import { Type } from 'class-transformer';
import { ReviewUpdateOneRequiredWithoutReviewResponsesNestedInput } from '../review/review-update-one-required-without-review-responses-nested.input';
import { UserUpdateOneRequiredWithoutReviewResponsesNestedInput } from '../user/user-update-one-required-without-review-responses-nested.input';

@InputType()
export class ReviewResponseUpdateWithoutOtherReviewResponsesInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    reviewResponseId?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    responseText?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    responseDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumReviewsResponsesStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumReviewsResponsesStatusFieldUpdateOperationsInput;

    @Field(() => ReviewResponseUpdateOneWithoutOtherReviewResponsesNestedInput, {nullable:true})
    @Type(() => ReviewResponseUpdateOneWithoutOtherReviewResponsesNestedInput)
    reviewResponse?: ReviewResponseUpdateOneWithoutOtherReviewResponsesNestedInput;

    @Field(() => ReviewUpdateOneRequiredWithoutReviewResponsesNestedInput, {nullable:true})
    @Type(() => ReviewUpdateOneRequiredWithoutReviewResponsesNestedInput)
    review?: ReviewUpdateOneRequiredWithoutReviewResponsesNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutReviewResponsesNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutReviewResponsesNestedInput)
    user?: UserUpdateOneRequiredWithoutReviewResponsesNestedInput;
}