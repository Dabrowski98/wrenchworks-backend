import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TaskUpdateOneRequiredWithoutTaskEmployeesNestedInput } from '../../task/dto/task-update-one-required-without-task-employees-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeTaskUpdateWithoutEmployeeInput {

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Created at must be a valid date' })
    createdAt?: Date | string;

    @Field(() => TaskUpdateOneRequiredWithoutTaskEmployeesNestedInput, {nullable:true})
    @Type(() => TaskUpdateOneRequiredWithoutTaskEmployeesNestedInput)
    Task?: TaskUpdateOneRequiredWithoutTaskEmployeesNestedInput;
}
