import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeePermissionWhereInput } from './employee-permission-where.input';

@InputType()
export class EmployeePermissionListRelationFilter {

    @Field(() => EmployeePermissionWhereInput, {nullable:true})
    every?: EmployeePermissionWhereInput;

    @Field(() => EmployeePermissionWhereInput, {nullable:true})
    some?: EmployeePermissionWhereInput;

    @Field(() => EmployeePermissionWhereInput, {nullable:true})
    none?: EmployeePermissionWhereInput;
}
