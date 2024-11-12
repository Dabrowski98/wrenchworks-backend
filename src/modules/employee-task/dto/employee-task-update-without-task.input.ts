import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { EmployeeUpdateOneRequiredWithoutEmployeeTasksNestedInput } from '../../employee/dto/employee-update-one-required-without-employee-tasks-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeTaskUpdateWithoutTaskInput {

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Created at must be a valid date' })
    createdAt?: Date | string;

    @Field(() => EmployeeUpdateOneRequiredWithoutEmployeeTasksNestedInput, {nullable:true})
    @Type(() => EmployeeUpdateOneRequiredWithoutEmployeeTasksNestedInput)
    employee?: EmployeeUpdateOneRequiredWithoutEmployeeTasksNestedInput;
}
