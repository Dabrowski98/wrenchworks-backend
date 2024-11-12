import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserReportsInput } from './user-create-without-user-reports.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserReportsInput } from './user-create-or-connect-without-user-reports.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserReportsInput {

    @Field(() => UserCreateWithoutUserReportsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserReportsInput)
    create?: UserCreateWithoutUserReportsInput;

    @Field(() => UserCreateOrConnectWithoutUserReportsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserReportsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserReportsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'personId' | 'username' | 'username'>;
}
