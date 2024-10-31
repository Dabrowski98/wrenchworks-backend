import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EmployeeUpdateOneRequiredWithoutEmployeeTasksNestedInput } from '../employee/employee-update-one-required-without-employee-tasks-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeTaskUpdateWithoutTaskInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EmployeeUpdateOneRequiredWithoutEmployeeTasksNestedInput, {nullable:true})
    @Type(() => EmployeeUpdateOneRequiredWithoutEmployeeTasksNestedInput)
    employee?: EmployeeUpdateOneRequiredWithoutEmployeeTasksNestedInput;
}
