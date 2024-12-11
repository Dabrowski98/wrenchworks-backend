import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewsInput } from './user-create-without-reviews.input';
import { HideField } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutReviewsInput } from './user-create-or-connect-without-reviews.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateNestedOneWithoutReviewsInput {

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email' | 'addressId'>;
}