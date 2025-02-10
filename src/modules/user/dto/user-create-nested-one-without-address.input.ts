import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAddressInput } from './user-create-without-address.input';
import { HideField } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutAddressInput } from './user-create-or-connect-without-address.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateNestedOneWithoutAddressInput {

    @HideField()
    create?: UserCreateWithoutAddressInput;

    @HideField()
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email' | 'addressId'>;
}
