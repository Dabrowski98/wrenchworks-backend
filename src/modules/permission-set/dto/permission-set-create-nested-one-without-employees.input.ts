import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSetCreateWithoutEmployeesInput } from './permission-set-create-without-employees.input';
import { HideField } from '@nestjs/graphql';
import { PermissionSetCreateOrConnectWithoutEmployeesInput } from './permission-set-create-or-connect-without-employees.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';

@InputType()
export class PermissionSetCreateNestedOneWithoutEmployeesInput {

    @Field(() => PermissionSetCreateOrConnectWithoutEmployeesInput, {nullable:true})
    @Type(() => PermissionSetCreateOrConnectWithoutEmployeesInput)
    @ValidateNested()
    connectOrCreate?: PermissionSetCreateOrConnectWithoutEmployeesInput;

    }