import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutServiceRequestsInput } from './user-create-without-service-requests.input';
import { HideField } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutServiceRequestsInput } from './user-create-or-connect-without-service-requests.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateNestedOneWithoutServiceRequestsInput {

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email' | 'addressId'>;
}