import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserReportsInput } from './user-create-without-user-reports.input';

@InputType()
export class UserCreateOrConnectWithoutUserReportsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'personId' | 'username' | 'username'>;

    @Field(() => UserCreateWithoutUserReportsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserReportsInput)
    create!: UserCreateWithoutUserReportsInput;
}
