import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAddressInput } from './user-create-without-address.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateOrConnectWithoutAddressInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email' | 'addressId'>;

    @Field(() => UserCreateWithoutAddressInput, {nullable:false})
    @Type(() => UserCreateWithoutAddressInput)
    @ValidateNested()
    create!: UserCreateWithoutAddressInput;
}
