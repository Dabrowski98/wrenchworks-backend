import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeTaskCreateInput } from './employee-task-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEmployeeTaskArgs {

    @Field(() => EmployeeTaskCreateInput, {nullable:false})
    @Type(() => EmployeeTaskCreateInput)
    data!: EmployeeTaskCreateInput;
}
