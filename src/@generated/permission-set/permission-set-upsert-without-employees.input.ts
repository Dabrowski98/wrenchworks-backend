import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSetUpdateWithoutEmployeesInput } from './permission-set-update-without-employees.input';
import { Type } from 'class-transformer';
import { PermissionSetCreateWithoutEmployeesInput } from './permission-set-create-without-employees.input';
import { PermissionSetWhereInput } from './permission-set-where.input';

@InputType()
export class PermissionSetUpsertWithoutEmployeesInput {

    @Field(() => PermissionSetUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => PermissionSetUpdateWithoutEmployeesInput)
    update!: PermissionSetUpdateWithoutEmployeesInput;

    @Field(() => PermissionSetCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => PermissionSetCreateWithoutEmployeesInput)
    create!: PermissionSetCreateWithoutEmployeesInput;

    @Field(() => PermissionSetWhereInput, {nullable:true})
    @Type(() => PermissionSetWhereInput)
    where?: PermissionSetWhereInput;
}
