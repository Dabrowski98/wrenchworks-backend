import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSetWhereInput } from './permission-set-where.input';
import { Type } from 'class-transformer';
import { PermissionSetUpdateWithoutEmployeesInput } from './permission-set-update-without-employees.input';

@InputType()
export class PermissionSetUpdateToOneWithWhereWithoutEmployeesInput {

    @Field(() => PermissionSetWhereInput, {nullable:true})
    @Type(() => PermissionSetWhereInput)
    where?: PermissionSetWhereInput;

    @Field(() => PermissionSetUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => PermissionSetUpdateWithoutEmployeesInput)
    data!: PermissionSetUpdateWithoutEmployeesInput;
}
