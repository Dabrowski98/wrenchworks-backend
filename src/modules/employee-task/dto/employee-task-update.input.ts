import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EmployeeUpdateOneRequiredWithoutEmployeeTasksNestedInput } from '../employee/employee-update-one-required-without-employee-tasks-nested.input';
import { Type } from 'class-transformer';
import { TaskUpdateOneRequiredWithoutTaskEmployeesNestedInput } from '../task/task-update-one-required-without-task-employees-nested.input';

@InputType()
export class EmployeeTaskUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EmployeeUpdateOneRequiredWithoutEmployeeTasksNestedInput, {nullable:true})
    @Type(() => EmployeeUpdateOneRequiredWithoutEmployeeTasksNestedInput)
    employee?: EmployeeUpdateOneRequiredWithoutEmployeeTasksNestedInput;

    @Field(() => TaskUpdateOneRequiredWithoutTaskEmployeesNestedInput, {nullable:true})
    @Type(() => TaskUpdateOneRequiredWithoutTaskEmployeesNestedInput)
    Task?: TaskUpdateOneRequiredWithoutTaskEmployeesNestedInput;
}
