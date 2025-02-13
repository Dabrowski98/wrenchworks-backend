import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserReportsInput } from './user-create-without-user-reports.input';
import { HideField } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutUserReportsInput } from './user-create-or-connect-without-user-reports.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateNestedOneWithoutUserReportsInput {

    @HideField()
    create?: UserCreateWithoutUserReportsInput;

    @HideField()
    connectOrCreate?: UserCreateOrConnectWithoutUserReportsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email'>;
}
