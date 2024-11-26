import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCustomersInput } from './user-create-without-customers.input';
import { HideField } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutCustomersInput } from './user-create-or-connect-without-customers.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateNestedOneWithoutCustomersInput {

    @HideField()
    create?: UserCreateWithoutCustomersInput;

    @HideField()
    connectOrCreate?: UserCreateOrConnectWithoutCustomersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'addressId'>;
}
