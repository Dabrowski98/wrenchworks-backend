import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumReviewsResponsesStatusFieldUpdateOperationsInput } from '../prisma/enum-reviews-responses-status-field-update-operations.input';
import { ReviewResponseUncheckedUpdateManyWithoutReviewResponseNestedInput } from './review-response-unchecked-update-many-without-review-response-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewResponseUncheckedUpdateWithoutUserInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    reviewResponseId?: BigIntFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    reviewId?: BigIntFieldUpdateOperationsInput;

    @Field(() => NullableBigIntFieldUpdateOperationsInput, {nullable:true})
    parentResponseId?: NullableBigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    responseText?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    responseDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumReviewsResponsesStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumReviewsResponsesStatusFieldUpdateOperationsInput;

    @Field(() => ReviewResponseUncheckedUpdateManyWithoutReviewResponseNestedInput, {nullable:true})
    @Type(() => ReviewResponseUncheckedUpdateManyWithoutReviewResponseNestedInput)
    otherReviewResponses?: ReviewResponseUncheckedUpdateManyWithoutReviewResponseNestedInput;
}
