import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PermissionSetCountAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    permissionSetId!: number;

    @Field(() => Int, {nullable:false})
    workshopId!: number;

    @Field(() => Int, {nullable:false})
    setName!: number;

    @Field(() => Int, {nullable:false})
    canReadWorkshopDetails!: number;

    @Field(() => Int, {nullable:false})
    canUpdateWorkshopDetails!: number;

    @Field(() => Int, {nullable:false})
    canModifyWorkshopDetails!: number;

    @Field(() => Int, {nullable:false})
    canReadEmployees!: number;

    @Field(() => Int, {nullable:false})
    canUpdateEmployees!: number;

    @Field(() => Int, {nullable:false})
    canModifyEmployees!: number;

    @Field(() => Int, {nullable:false})
    canReadCustomers!: number;

    @Field(() => Int, {nullable:false})
    canUpdateCustomers!: number;

    @Field(() => Int, {nullable:false})
    canModifyCustomers!: number;

    @Field(() => Int, {nullable:false})
    canReadServices!: number;

    @Field(() => Int, {nullable:false})
    canUpdateServices!: number;

    @Field(() => Int, {nullable:false})
    canModifyServices!: number;

    @Field(() => Int, {nullable:false})
    canReadTasks!: number;

    @Field(() => Int, {nullable:false})
    canUpdateTasks!: number;

    @Field(() => Int, {nullable:false})
    canModifyTasks!: number;

    @Field(() => Int, {nullable:false})
    canReadReports!: number;

    @Field(() => Int, {nullable:false})
    canGenerateReports!: number;

    @Field(() => Int, {nullable:false})
    canModifyPermissions!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    updatedBy!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
