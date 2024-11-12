import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TaskCreateNestedOneWithoutTaskEmployeesInput } from '../../task/dto/task-create-nested-one-without-task-employees.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeTaskCreateWithoutEmployeeInput {

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Created at must be a valid date' })
    createdAt?: Date | string;

    @Field(() => TaskCreateNestedOneWithoutTaskEmployeesInput, {nullable:false})
    @Type(() => TaskCreateNestedOneWithoutTaskEmployeesInput)
    Task!: TaskCreateNestedOneWithoutTaskEmployeesInput;
}
