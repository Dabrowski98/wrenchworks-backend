import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumReviewsStatusFieldUpdateOperationsInput } from '../prisma/enum-reviews-status-field-update-operations.input';
import { WorkshopUpdateOneRequiredWithoutReviewsNestedInput } from '../workshop/workshop-update-one-required-without-reviews-nested.input';
import { ReviewResponseUpdateManyWithoutReviewNestedInput } from '../review-response/review-response-update-many-without-review-nested.input';

@InputType()
export class ReviewUpdateWithoutUserInput {

    @HideField()
    reviewId?: BigIntFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    rating?: DecimalFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    reviewText?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    reviewDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumReviewsStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumReviewsStatusFieldUpdateOperationsInput;

    @Field(() => WorkshopUpdateOneRequiredWithoutReviewsNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateOneRequiredWithoutReviewsNestedInput)
    workshop?: WorkshopUpdateOneRequiredWithoutReviewsNestedInput;

    @Field(() => ReviewResponseUpdateManyWithoutReviewNestedInput, {nullable:true})
    @Type(() => ReviewResponseUpdateManyWithoutReviewNestedInput)
    reviewResponses?: ReviewResponseUpdateManyWithoutReviewNestedInput;
}
