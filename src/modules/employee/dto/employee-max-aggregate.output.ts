import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class EmployeeMaxAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    employeeId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    nickname?: string;

    @Field(() => String, {nullable:true})
    login?: string;

    @Field(() => String, {nullable:true})
    refreshToken?: string;

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: bigint | number;
}