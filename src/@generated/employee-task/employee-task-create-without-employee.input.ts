import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedOneWithoutTaskEmployeesInput } from '../task/task-create-nested-one-without-task-employees.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeTaskCreateWithoutEmployeeInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => TaskCreateNestedOneWithoutTaskEmployeesInput, {nullable:false})
    @Type(() => TaskCreateNestedOneWithoutTaskEmployeesInput)
    Task!: TaskCreateNestedOneWithoutTaskEmployeesInput;
}
