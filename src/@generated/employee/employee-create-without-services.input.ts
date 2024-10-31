import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSetCreateNestedOneWithoutEmployeesInput } from '../permission-set/permission-set-create-nested-one-without-employees.input';
import { WorkshopCreateNestedOneWithoutEmployeesInput } from '../workshop/workshop-create-nested-one-without-employees.input';
import { Type } from 'class-transformer';
import { PersonCreateNestedOneWithoutEmployeesInput } from '../person/person-create-nested-one-without-employees.input';
import { EmployeeTaskCreateNestedManyWithoutEmployeeInput } from '../employee-task/employee-task-create-nested-many-without-employee.input';

@InputType()
export class EmployeeCreateWithoutServicesInput {

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => PermissionSetCreateNestedOneWithoutEmployeesInput, {nullable:true})
    permissionSet?: PermissionSetCreateNestedOneWithoutEmployeesInput;

    @Field(() => WorkshopCreateNestedOneWithoutEmployeesInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutEmployeesInput)
    workshop!: WorkshopCreateNestedOneWithoutEmployeesInput;

    @Field(() => PersonCreateNestedOneWithoutEmployeesInput, {nullable:false})
    @Type(() => PersonCreateNestedOneWithoutEmployeesInput)
    person!: PersonCreateNestedOneWithoutEmployeesInput;

    @Field(() => EmployeeTaskCreateNestedManyWithoutEmployeeInput, {nullable:true})
    @Type(() => EmployeeTaskCreateNestedManyWithoutEmployeeInput)
    employeeTasks?: EmployeeTaskCreateNestedManyWithoutEmployeeInput;
}
