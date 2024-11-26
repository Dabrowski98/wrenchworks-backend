import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeCreateInput } from './employee-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneEmployeeArgs {

    @Field(() => EmployeeCreateInput, {nullable:false})
    @Type(() => EmployeeCreateInput)
    @ValidateNested()
    data!: EmployeeCreateInput;
}
