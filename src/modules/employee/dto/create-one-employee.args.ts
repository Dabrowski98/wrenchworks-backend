import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeCreateInput } from './employee-create.input';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@ArgsType()
export class CreateOneEmployeeArgs {

    @Field(() => EmployeeCreateInput, {nullable:false})
    @Type(() => EmployeeCreateInput)
    @Validator.ValidateNested()
    data!: EmployeeCreateInput;
}
