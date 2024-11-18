import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeTaskCreateInput } from './employee-task-create.input';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@ArgsType()
export class CreateOneEmployeeTaskArgs {

    @Field(() => EmployeeTaskCreateInput, {nullable:false})
    @Type(() => EmployeeTaskCreateInput)
    @Validator.ValidateNested()
    data!: EmployeeTaskCreateInput;
}
