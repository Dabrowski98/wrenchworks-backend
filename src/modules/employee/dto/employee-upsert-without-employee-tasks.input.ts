import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutEmployeeTasksInput } from './employee-update-without-employee-tasks.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutEmployeeTasksInput } from './employee-create-without-employee-tasks.input';
import { EmployeeWhereInput } from './employee-where.input';

@InputType()
export class EmployeeUpsertWithoutEmployeeTasksInput {

    @Field(() => EmployeeUpdateWithoutEmployeeTasksInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutEmployeeTasksInput)
    update!: EmployeeUpdateWithoutEmployeeTasksInput;

    @Field(() => EmployeeCreateWithoutEmployeeTasksInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutEmployeeTasksInput)
    create!: EmployeeCreateWithoutEmployeeTasksInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    where?: EmployeeWhereInput;
}
