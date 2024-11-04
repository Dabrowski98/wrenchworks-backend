import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { WorkshopCreateNestedOneWithoutEmployeesInput } from '../workshop/workshop-create-nested-one-without-employees.input';
import { Type } from 'class-transformer';
import { PersonCreateNestedOneWithoutEmployeesInput } from '../person/person-create-nested-one-without-employees.input';
import { ServiceCreateNestedManyWithoutEmployeeInput } from '../service/service-create-nested-many-without-employee.input';
import { EmployeeTaskCreateNestedManyWithoutEmployeeInput } from '../employee-task/employee-task-create-nested-many-without-employee.input';

@InputType()
export class EmployeeCreateWithoutPermissionSetInput {

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => WorkshopCreateNestedOneWithoutEmployeesInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutEmployeesInput)
    workshop!: WorkshopCreateNestedOneWithoutEmployeesInput;

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
