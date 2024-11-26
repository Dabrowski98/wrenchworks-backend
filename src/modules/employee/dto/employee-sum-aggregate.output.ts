import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EmployeeSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    employeeId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Int, {nullable:true})
    permissionSetId?: number;

    @Field(() => String, {nullable:true})
    createdBy?: bigint | number;

    @Field(() => String, {nullable:true})
    updatedBy?: bigint | number;
}
