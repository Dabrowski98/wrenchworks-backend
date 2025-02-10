import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeePermissionWhereInput } from './employee-permission-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyEmployeePermissionArgs {

    @Field(() => EmployeePermissionWhereInput, {nullable:true})
    @Type(() => EmployeePermissionWhereInput)
    where?: EmployeePermissionWhereInput;
}
