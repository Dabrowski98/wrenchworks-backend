import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { PermissionSetUpdateOneWithoutEmployeesNestedInput } from '../permission-set/permission-set-update-one-without-employees-nested.input';
import { PersonUpdateOneRequiredWithoutEmployeesNestedInput } from '../person/person-update-one-required-without-employees-nested.input';
import { Type } from 'class-transformer';
import { ServiceUpdateManyWithoutEmployeeNestedInput } from '../service/service-update-many-without-employee-nested.input';
import { EmployeeTaskUpdateManyWithoutEmployeeNestedInput } from '../employee-task/employee-task-update-many-without-employee-nested.input';

@InputType()
export class EmployeeUpdateWithoutWorkshopInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    joinedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => PermissionSetUpdateOneWithoutEmployeesNestedInput, {nullable:true})
    permissionSet?: PermissionSetUpdateOneWithoutEmployeesNestedInput;

    @Field(() => PersonUpdateOneRequiredWithoutEmployeesNestedInput, {nullable:true})
    @Type(() => PersonUpdateOneRequiredWithoutEmployeesNestedInput)
    person?: PersonUpdateOneRequiredWithoutEmployeesNestedInput;

    @Field(() => ServiceUpdateManyWithoutEmployeeNestedInput, {nullable:true})
    @Type(() => ServiceUpdateManyWithoutEmployeeNestedInput)
    services?: ServiceUpdateManyWithoutEmployeeNestedInput;

    @Field(() => EmployeeTaskUpdateManyWithoutEmployeeNestedInput, {nullable:true})
    @Type(() => EmployeeTaskUpdateManyWithoutEmployeeNestedInput)
    employeeTasks?: EmployeeTaskUpdateManyWithoutEmployeeNestedInput;
}
