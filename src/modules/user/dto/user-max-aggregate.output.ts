import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { UsersStatus } from '../../prisma/dto/users-status.enum';

@ObjectType()
export class UserMaxAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    personId?: bigint | number;

    @Field(() => String, {nullable:true})
    username?: string;

    @HideField()
    password?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    avatarURL?: string;

    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;

    @Field(() => UsersStatus, {nullable:true})
    status?: keyof typeof UsersStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
