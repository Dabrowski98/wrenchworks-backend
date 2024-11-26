import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSetCreateWithoutEmployeesInput } from './permission-set-create-without-employees.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { PermissionSetCreateOrConnectWithoutEmployeesInput } from './permission-set-create-or-connect-without-employees.input';
import { PermissionSetUpsertWithoutEmployeesInput } from './permission-set-upsert-without-employees.input';
import { PermissionSetWhereInput } from './permission-set-where.input';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';
import { PermissionSetUpdateToOneWithWhereWithoutEmployeesInput } from './permission-set-update-to-one-with-where-without-employees.input';

@InputType()
export class PermissionSetUpdateOneWithoutEmployeesNestedInput {

    @Field(() => PermissionSetCreateWithoutEmployeesInput, {nullable:true})
    @Type(() => PermissionSetCreateWithoutEmployeesInput)
    @ValidateNested()
    create?: PermissionSetCreateWithoutEmployeesInput;

    @Field(() => PermissionSetCreateOrConnectWithoutEmployeesInput, {nullable:true})
    @Type(() => PermissionSetCreateOrConnectWithoutEmployeesInput)
    @ValidateNested()
    connectOrCreate?: PermissionSetCreateOrConnectWithoutEmployeesInput;

    @Field(() => PermissionSetUpsertWithoutEmployeesInput, {nullable:true})
    @Type(() => PermissionSetUpsertWithoutEmployeesInput)
    @ValidateNested()
    upsert?: PermissionSetUpsertWithoutEmployeesInput;

    @Field(() => PermissionSetWhereInput, {nullable:true})
    @Type(() => PermissionSetWhereInput)
    @ValidateNested()
    disconnect?: PermissionSetWhereInput;

    @Field(() => PermissionSetWhereInput, {nullable:true})
    @Type(() => PermissionSetWhereInput)
    @ValidateNested()
    delete?: PermissionSetWhereInput;

    @Field(() => PermissionSetWhereUniqueInput, {nullable:true})
    @Type(() => PermissionSetWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>;

    @Field(() => PermissionSetUpdateToOneWithWhereWithoutEmployeesInput, {nullable:true})
    @Type(() => PermissionSetUpdateToOneWithWhereWithoutEmployeesInput)
    @ValidateNested()
    update?: PermissionSetUpdateToOneWithWhereWithoutEmployeesInput;
}
