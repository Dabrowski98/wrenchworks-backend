import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { UserStatus } from '../../prisma/dto/user-status.enum';
import { UserRole } from '../../prisma/dto/user-role.enum';

@ObjectType()
export class UserMinAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    telephoneNumber?: string;

    @Field(() => String, {nullable:true})
    avatarURL?: string;

    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;

    @Field(() => UserStatus, {nullable:true})
    status?: keyof typeof UserStatus;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => UserRole, {nullable:true})
    role?: keyof typeof UserRole;

    @Field(() => String, {nullable:true})
    addressId?: bigint | number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}