import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { EmployeeCreateNestedOneWithoutEmployeeTasksInput } from '../../employee/dto/employee-create-nested-one-without-employee-tasks.input';
import { Type } from 'class-transformer';
import { TaskCreateNestedOneWithoutTaskEmployeesInput } from '../../task/dto/task-create-nested-one-without-task-employees.input';

@InputType()
export class EmployeeTaskCreateInput {

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Created at must be a valid date' })
    createdAt?: Date | string;

    @Field(() => EmployeeCreateNestedOneWithoutEmployeeTasksInput, {nullable:false})
    @Type(() => EmployeeCreateNestedOneWithoutEmployeeTasksInput)
    employee!: EmployeeCreateNestedOneWithoutEmployeeTasksInput;

    @Field(() => TaskCreateNestedOneWithoutTaskEmployeesInput, {nullable:false})
    @Type(() => TaskCreateNestedOneWithoutTaskEmployeesInput)
    Task!: TaskCreateNestedOneWithoutTaskEmployeesInput;
}
