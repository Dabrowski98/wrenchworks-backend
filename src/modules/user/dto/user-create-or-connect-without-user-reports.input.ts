import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserReportsInput } from './user-create-without-user-reports.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateOrConnectWithoutUserReportsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'email' | 'addressId'>;

    @Field(() => UserCreateWithoutUserReportsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserReportsInput)
    @ValidateNested()
    create!: UserCreateWithoutUserReportsInput;
}
