import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumReviewsResponsesStatusFieldUpdateOperationsInput } from '../prisma/enum-reviews-responses-status-field-update-operations.input';

@InputType()
export class ReviewResponseUpdateManyMutationInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    reviewResponseId?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    responseText?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    responseDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumReviewsResponsesStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumReviewsResponsesStatusFieldUpdateOperationsInput;
}