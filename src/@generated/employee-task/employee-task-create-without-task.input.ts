import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateNestedOneWithoutEmployeeTasksInput } from '../employee/employee-create-nested-one-without-employee-tasks.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeTaskCreateWithoutTaskInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => EmployeeCreateNestedOneWithoutEmployeeTasksInput, {nullable:false})
    @Type(() => EmployeeCreateNestedOneWithoutEmployeeTasksInput)
    employee!: EmployeeCreateNestedOneWithoutEmployeeTasksInput;
}
