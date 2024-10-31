import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableEnumUsersStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-users-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ReviewUncheckedUpdateManyWithoutUserNestedInput } from '../review/review-unchecked-update-many-without-user-nested.input';
import { Type } from 'class-transformer';
import { ReviewResponseUncheckedUpdateManyWithoutUserNestedInput } from '../review-response/review-response-unchecked-update-many-without-user-nested.input';
import { UserReportUncheckedUpdateManyWithoutUserNestedInput } from '../user-report/user-report-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    userId?: BigIntFieldUpdateOperationsInput;

    @Field(() => NullableBigIntFieldUpdateOperationsInput, {nullable:true})
    personId?: NullableBigIntFieldUpdateOperationsInput;

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

    @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => ReviewUncheckedUpdateManyWithoutUserNestedInput)
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewResponseUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => ReviewResponseUncheckedUpdateManyWithoutUserNestedInput)
    reviewResponses?: ReviewResponseUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => UserReportUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userReports?: UserReportUncheckedUpdateManyWithoutUserNestedInput;
}
