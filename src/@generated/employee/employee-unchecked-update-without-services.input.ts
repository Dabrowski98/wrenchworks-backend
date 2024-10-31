import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { EmployeeTaskUncheckedUpdateManyWithoutEmployeeNestedInput } from '../employee-task/employee-task-unchecked-update-many-without-employee-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeUncheckedUpdateWithoutServicesInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    employeeId?: BigIntFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    workshopId?: BigIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    joinedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableBigIntFieldUpdateOperationsInput, {nullable:true})
    permissionSetId?: NullableBigIntFieldUpdateOperationsInput;

    @Field(() => EmployeeTaskUncheckedUpdateManyWithoutEmployeeNestedInput, {nullable:true})
    @Type(() => EmployeeTaskUncheckedUpdateManyWithoutEmployeeNestedInput)
    employeeTasks?: EmployeeTaskUncheckedUpdateManyWithoutEmployeeNestedInput;
}
