import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionSetCreateWithoutEmployeesInput } from './permission-set-create-without-employees.input';

@InputType()
export class PermissionSetCreateOrConnectWithoutEmployeesInput {

    @Field(() => PermissionSetWhereUniqueInput, {nullable:false})
    @Type(() => PermissionSetWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>;

    @Field(() => PermissionSetCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => PermissionSetCreateWithoutEmployeesInput)
    create!: PermissionSetCreateWithoutEmployeesInput;
}
