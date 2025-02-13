import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSessionDataInput } from './user-create-without-session-data.input';
import { HideField } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutSessionDataInput } from './user-create-or-connect-without-session-data.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateNestedOneWithoutSessionDataInput {

    @HideField()
    create?: UserCreateWithoutSessionDataInput;

    @HideField()
    connectOrCreate?: UserCreateOrConnectWithoutSessionDataInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email'>;
}
