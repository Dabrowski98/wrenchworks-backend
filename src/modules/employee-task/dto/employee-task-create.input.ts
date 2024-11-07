import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateNestedOneWithoutEmployeeTasksInput } from '../employee/employee-create-nested-one-without-employee-tasks.input';
import { Type } from 'class-transformer';
import { TaskCreateNestedOneWithoutTaskEmployeesInput } from '../task/task-create-nested-one-without-task-employees.input';

@InputType()
export class EmployeeTaskCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => EmployeeCreateNestedOneWithoutEmployeeTasksInput, {nullable:false})
    @Type(() => EmployeeCreateNestedOneWithoutEmployeeTasksInput)
    employee!: EmployeeCreateNestedOneWithoutEmployeeTasksInput;

    @Field(() => TaskCreateNestedOneWithoutTaskEmployeesInput, {nullable:false})
    @Type(() => TaskCreateNestedOneWithoutTaskEmployeesInput)
    Task!: TaskCreateNestedOneWithoutTaskEmployeesInput;
}
