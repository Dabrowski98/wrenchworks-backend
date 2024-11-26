import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeUpdateManyMutationInput } from './employee-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeWhereInput } from './employee-where.input';

@ArgsType()
export class UpdateManyEmployeeArgs {

    @Field(() => EmployeeUpdateManyMutationInput, {nullable:false})
    @Type(() => EmployeeUpdateManyMutationInput)
    @ValidateNested()
    data!: EmployeeUpdateManyMutationInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    where?: EmployeeWhereInput;
}
