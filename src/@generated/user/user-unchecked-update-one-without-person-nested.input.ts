import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPersonInput } from './user-create-without-person.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPersonInput } from './user-create-or-connect-without-person.input';
import { UserUpsertWithoutPersonInput } from './user-upsert-without-person.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPersonInput } from './user-update-to-one-with-where-without-person.input';

@InputType()
export class UserUncheckedUpdateOneWithoutPersonNestedInput {

    @Field(() => UserCreateWithoutPersonInput, {nullable:true})
    @Type(() => UserCreateWithoutPersonInput)
    create?: UserCreateWithoutPersonInput;

    @Field(() => UserCreateOrConnectWithoutPersonInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPersonInput)
    connectOrCreate?: UserCreateOrConnectWithoutPersonInput;

    @Field(() => UserUpsertWithoutPersonInput, {nullable:true})
    @Type(() => UserUpsertWithoutPersonInput)
    upsert?: UserUpsertWithoutPersonInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'personId' | 'username' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPersonInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPersonInput)
    update?: UserUpdateToOneWithWhereWithoutPersonInput;
}
