import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEmployeesInput } from './user-create-without-employees.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateOrConnectWithoutEmployeesInput } from './user-create-or-connect-without-employees.input';
import { UserUpsertWithoutEmployeesInput } from './user-upsert-without-employees.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutEmployeesInput } from './user-update-to-one-with-where-without-employees.input';

@InputType()
export class UserUpdateOneWithoutEmployeesNestedInput {

    @Field(() => UserCreateWithoutEmployeesInput, {nullable:true})
    @Type(() => UserCreateWithoutEmployeesInput)
    @ValidateNested()
    create?: UserCreateWithoutEmployeesInput;

    @Field(() => UserCreateOrConnectWithoutEmployeesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEmployeesInput)
    @ValidateNested()
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput;

    @Field(() => UserUpsertWithoutEmployeesInput, {nullable:true})
    @Type(() => UserUpsertWithoutEmployeesInput)
    @ValidateNested()
    upsert?: UserUpsertWithoutEmployeesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email' | 'addressId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutEmployeesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutEmployeesInput)
    @ValidateNested()
    update?: UserUpdateToOneWithWhereWithoutEmployeesInput;
}
