import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCustomersInput } from './user-create-without-customers.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateOrConnectWithoutCustomersInput } from './user-create-or-connect-without-customers.input';
import { UserUpsertWithoutCustomersInput } from './user-upsert-without-customers.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCustomersInput } from './user-update-to-one-with-where-without-customers.input';

@InputType()
export class UserUpdateOneWithoutCustomersNestedInput {

    @Field(() => UserCreateWithoutCustomersInput, {nullable:true})
    @Type(() => UserCreateWithoutCustomersInput)
    @ValidateNested()
    create?: UserCreateWithoutCustomersInput;

    @Field(() => UserCreateOrConnectWithoutCustomersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCustomersInput)
    @ValidateNested()
    connectOrCreate?: UserCreateOrConnectWithoutCustomersInput;

    @Field(() => UserUpsertWithoutCustomersInput, {nullable:true})
    @Type(() => UserUpsertWithoutCustomersInput)
    @ValidateNested()
    upsert?: UserUpsertWithoutCustomersInput;

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
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'email' | 'addressId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutCustomersInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCustomersInput)
    @ValidateNested()
    update?: UserUpdateToOneWithWhereWithoutCustomersInput;
}
