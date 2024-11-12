import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PermissionSetUpdateOneWithoutEmployeesNestedInput } from '../../permission-set/dto/permission-set-update-one-without-employees-nested.input';
import { WorkshopUpdateOneRequiredWithoutEmployeesNestedInput } from '../../workshop/dto/workshop-update-one-required-without-employees-nested.input';
import { Type } from 'class-transformer';
import { PersonUpdateOneRequiredWithoutEmployeesNestedInput } from '../../person/dto/person-update-one-required-without-employees-nested.input';
import { ServiceUpdateManyWithoutEmployeeNestedInput } from '../../service/dto/service-update-many-without-employee-nested.input';
import { EmployeeTaskUpdateManyWithoutEmployeeNestedInput } from '../../employee-task/dto/employee-task-update-many-without-employee-nested.input';

@InputType()
export class EmployeeUpdateInput {

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Joined at must be a valid date' })
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => PermissionSetUpdateOneWithoutEmployeesNestedInput, {nullable:true})
    permissionSet?: PermissionSetUpdateOneWithoutEmployeesNestedInput;

    @Field(() => WorkshopUpdateOneRequiredWithoutEmployeesNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateOneRequiredWithoutEmployeesNestedInput)
    workshop?: WorkshopUpdateOneRequiredWithoutEmployeesNestedInput;

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
