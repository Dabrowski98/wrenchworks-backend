import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereInput } from './employee-where.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutEmployeeTasksInput } from './employee-update-without-employee-tasks.input';

@InputType()
export class EmployeeUpdateToOneWithWhereWithoutEmployeeTasksInput {

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    where?: EmployeeWhereInput;

    @Field(() => EmployeeUpdateWithoutEmployeeTasksInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutEmployeeTasksInput)
    data!: EmployeeUpdateWithoutEmployeeTasksInput;
}
