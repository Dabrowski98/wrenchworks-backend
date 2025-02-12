import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCustomersInput } from './user-create-without-customers.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateOrConnectWithoutCustomersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutCustomersInput, {nullable:false})
    @Type(() => UserCreateWithoutCustomersInput)
    @ValidateNested()
    create!: UserCreateWithoutCustomersInput;
}
