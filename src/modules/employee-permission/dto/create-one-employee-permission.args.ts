import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeePermissionCreateInput } from './employee-permission-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneEmployeePermissionArgs {

    @Field(() => EmployeePermissionCreateInput, {nullable:false})
    @Type(() => EmployeePermissionCreateInput)
    @ValidateNested()
    data!: EmployeePermissionCreateInput;
}
