import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableEnumUsersStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-users-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ReviewUpdateManyWithoutUserNestedInput } from '../review/review-update-many-without-user-nested.input';
import { Type } from 'class-transformer';
import { ReviewResponseUpdateManyWithoutUserNestedInput } from '../review-response/review-response-update-many-without-user-nested.input';
import { PersonUpdateOneWithoutUserNestedInput } from '../person/person-update-one-without-user-nested.input';

@InputType()
export class UserUpdateWithoutUserReportsInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    userId?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableEnumUsersStatusFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumUsersStatusFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => ReviewUpdateManyWithoutUserNestedInput)
    reviews?: ReviewUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewResponseUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => ReviewResponseUpdateManyWithoutUserNestedInput)
    reviewResponses?: ReviewResponseUpdateManyWithoutUserNestedInput;

    @Field(() => PersonUpdateOneWithoutUserNestedInput, {nullable:true})
    @Type(() => PersonUpdateOneWithoutUserNestedInput)
    person?: PersonUpdateOneWithoutUserNestedInput;
}
