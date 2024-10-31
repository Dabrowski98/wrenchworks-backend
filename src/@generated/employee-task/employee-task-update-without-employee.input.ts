import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TaskUpdateOneRequiredWithoutTaskEmployeesNestedInput } from '../task/task-update-one-required-without-task-employees-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeTaskUpdateWithoutEmployeeInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TaskUpdateOneRequiredWithoutTaskEmployeesNestedInput, {nullable:true})
    @Type(() => TaskUpdateOneRequiredWithoutTaskEmployeesNestedInput)
    Task?: TaskUpdateOneRequiredWithoutTaskEmployeesNestedInput;
}
