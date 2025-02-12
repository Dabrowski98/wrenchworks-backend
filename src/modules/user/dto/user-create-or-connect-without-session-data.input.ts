import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSessionDataInput } from './user-create-without-session-data.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateOrConnectWithoutSessionDataInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutSessionDataInput, {nullable:false})
    @Type(() => UserCreateWithoutSessionDataInput)
    @ValidateNested()
    create!: UserCreateWithoutSessionDataInput;
}
