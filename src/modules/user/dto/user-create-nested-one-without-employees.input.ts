import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEmployeesInput } from './user-create-without-employees.input';
import { HideField } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutEmployeesInput } from './user-create-or-connect-without-employees.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateNestedOneWithoutEmployeesInput {

    @HideField()
    create?: UserCreateWithoutEmployeesInput;

    @HideField()
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email'>;
}
