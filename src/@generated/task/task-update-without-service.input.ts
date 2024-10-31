import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableEnumTasksStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-tasks-status-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { EmployeeTaskUpdateManyWithoutTaskNestedInput } from '../employee-task/employee-task-update-many-without-task-nested.input';

@InputType()
export class TaskUpdateWithoutServiceInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    taskId?: BigIntFieldUpdateOperationsInput;

    @Field(() => NullableBigIntFieldUpdateOperationsInput, {nullable:true})
    jobId?: NullableBigIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    customName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => NullableEnumTasksStatusFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumTasksStatusFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    executionTime?: FloatFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    partsCost?: DecimalFieldUpdateOperationsInput;

    @Field(() => EmployeeTaskUpdateManyWithoutTaskNestedInput, {nullable:true})
    @Type(() => EmployeeTaskUpdateManyWithoutTaskNestedInput)
    taskEmployees?: EmployeeTaskUpdateManyWithoutTaskNestedInput;
}
