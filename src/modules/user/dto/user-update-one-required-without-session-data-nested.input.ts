import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSessionDataInput } from './user-create-without-session-data.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateOrConnectWithoutSessionDataInput } from './user-create-or-connect-without-session-data.input';
import { UserUpsertWithoutSessionDataInput } from './user-upsert-without-session-data.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutSessionDataInput } from './user-update-to-one-with-where-without-session-data.input';

@InputType()
export class UserUpdateOneRequiredWithoutSessionDataNestedInput {

    @Field(() => UserCreateWithoutSessionDataInput, {nullable:true})
    @Type(() => UserCreateWithoutSessionDataInput)
    @ValidateNested()
    create?: UserCreateWithoutSessionDataInput;

    @Field(() => UserCreateOrConnectWithoutSessionDataInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSessionDataInput)
    @ValidateNested()
    connectOrCreate?: UserCreateOrConnectWithoutSessionDataInput;

    @Field(() => UserUpsertWithoutSessionDataInput, {nullable:true})
    @Type(() => UserUpsertWithoutSessionDataInput)
    @ValidateNested()
    upsert?: UserUpsertWithoutSessionDataInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutSessionDataInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutSessionDataInput)
    @ValidateNested()
    update?: UserUpdateToOneWithWhereWithoutSessionDataInput;
}
