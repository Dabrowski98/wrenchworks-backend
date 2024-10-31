import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumReviewsStatusFieldUpdateOperationsInput } from '../prisma/enum-reviews-status-field-update-operations.input';
import { UserUpdateOneRequiredWithoutReviewsNestedInput } from '../user/user-update-one-required-without-reviews-nested.input';
import { WorkshopUpdateOneRequiredWithoutReviewsNestedInput } from '../workshop/workshop-update-one-required-without-reviews-nested.input';

@InputType()
export class ReviewUpdateWithoutReviewResponsesInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
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

    @Field(() => UserUpdateOneRequiredWithoutReviewsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutReviewsNestedInput)
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput;

    @Field(() => WorkshopUpdateOneRequiredWithoutReviewsNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateOneRequiredWithoutReviewsNestedInput)
    workshop?: WorkshopUpdateOneRequiredWithoutReviewsNestedInput;
}
