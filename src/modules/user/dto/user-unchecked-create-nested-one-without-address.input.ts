import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAddressInput } from './user-create-without-address.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateOrConnectWithoutAddressInput } from './user-create-or-connect-without-address.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedOneWithoutAddressInput {

    @Field(() => UserCreateWithoutAddressInput, {nullable:true})
    @Type(() => UserCreateWithoutAddressInput)
    @ValidateNested()
    create?: UserCreateWithoutAddressInput;

    @Field(() => UserCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAddressInput)
    @ValidateNested()
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email' | 'addressId'>;
}
