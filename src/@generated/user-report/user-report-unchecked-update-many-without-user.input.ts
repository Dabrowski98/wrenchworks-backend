import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumUserReportsReportedTypeFieldUpdateOperationsInput } from '../prisma/enum-user-reports-reported-type-field-update-operations.input';
import { EnumUserReportsStatusFieldUpdateOperationsInput } from '../prisma/enum-user-reports-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';

@InputType()
export class UserReportUncheckedUpdateManyWithoutUserInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    reportId?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    reportText?: StringFieldUpdateOperationsInput;

    @Field(() => EnumUserReportsReportedTypeFieldUpdateOperationsInput, {nullable:true})
    reportedType?: EnumUserReportsReportedTypeFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    reportedId?: BigIntFieldUpdateOperationsInput;

    @Field(() => EnumUserReportsStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumUserReportsStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;
}
