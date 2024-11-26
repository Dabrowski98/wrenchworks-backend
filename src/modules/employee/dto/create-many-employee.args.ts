import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeCreateManyInput } from './employee-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyEmployeeArgs {

    @Field(() => [EmployeeCreateManyInput], {nullable:false})
    @Type(() => EmployeeCreateManyInput)
    @ValidateNested()
    data!: Array<EmployeeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
