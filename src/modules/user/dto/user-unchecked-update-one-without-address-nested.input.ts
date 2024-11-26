import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAddressInput } from './user-create-without-address.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateOrConnectWithoutAddressInput } from './user-create-or-connect-without-address.input';
import { UserUpsertWithoutAddressInput } from './user-upsert-without-address.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAddressInput } from './user-update-to-one-with-where-without-address.input';

@InputType()
export class UserUncheckedUpdateOneWithoutAddressNestedInput {

    @Field(() => UserCreateWithoutAddressInput, {nullable:true})
    @Type(() => UserCreateWithoutAddressInput)
    @ValidateNested()
    create?: UserCreateWithoutAddressInput;

    @Field(() => UserCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAddressInput)
    @ValidateNested()
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput;

    @Field(() => UserUpsertWithoutAddressInput, {nullable:true})
    @Type(() => UserUpsertWithoutAddressInput)
    @ValidateNested()
    upsert?: UserUpsertWithoutAddressInput;

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
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'addressId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAddressInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAddressInput)
    @ValidateNested()
    update?: UserUpdateToOneWithWhereWithoutAddressInput;
}
