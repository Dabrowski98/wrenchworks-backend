import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutJoinWorkshopRequestsInput } from './user-create-without-join-workshop-requests.input';
import { HideField } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutJoinWorkshopRequestsInput } from './user-create-or-connect-without-join-workshop-requests.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateNestedOneWithoutJoinWorkshopRequestsInput {

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email' | 'addressId'>;
}