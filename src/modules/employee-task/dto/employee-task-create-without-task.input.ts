import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { EmployeeCreateNestedOneWithoutEmployeeTasksInput } from '../../employee/dto/employee-create-nested-one-without-employee-tasks.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeTaskCreateWithoutTaskInput {

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Created at must be a valid date' })
    createdAt?: Date | string;

    @Field(() => EmployeeCreateNestedOneWithoutEmployeeTasksInput, {nullable:false})
    @Type(() => EmployeeCreateNestedOneWithoutEmployeeTasksInput)
    employee!: EmployeeCreateNestedOneWithoutEmployeeTasksInput;
}
