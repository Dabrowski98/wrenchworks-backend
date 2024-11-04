import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PermissionSetCreateNestedOneWithoutEmployeesInput } from '../permission-set/permission-set-create-nested-one-without-employees.input';
import { PersonCreateNestedOneWithoutEmployeesInput } from '../person/person-create-nested-one-without-employees.input';
import { Type } from 'class-transformer';
import { ServiceCreateNestedManyWithoutEmployeeInput } from '../service/service-create-nested-many-without-employee.input';
import { EmployeeTaskCreateNestedManyWithoutEmployeeInput } from '../employee-task/employee-task-create-nested-many-without-employee.input';

@InputType()
export class EmployeeCreateWithoutWorkshopInput {

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => PermissionSetCreateNestedOneWithoutEmployeesInput, {nullable:true})
    permissionSet?: PermissionSetCreateNestedOneWithoutEmployeesInput;

    @Field(() => PersonCreateNestedOneWithoutEmployeesInput, {nullable:false})
    @Type(() => PersonCreateNestedOneWithoutEmployeesInput)
    person!: PersonCreateNestedOneWithoutEmployeesInput;

    @Field(() => ServiceCreateNestedManyWithoutEmployeeInput, {nullable:true})
    @Type(() => ServiceCreateNestedManyWithoutEmployeeInput)
    services?: ServiceCreateNestedManyWithoutEmployeeInput;

    @Field(() => EmployeeTaskCreateNestedManyWithoutEmployeeInput, {nullable:true})
    @Type(() => EmployeeTaskCreateNestedManyWithoutEmployeeInput)
    employeeTasks?: EmployeeTaskCreateNestedManyWithoutEmployeeInput;
}
