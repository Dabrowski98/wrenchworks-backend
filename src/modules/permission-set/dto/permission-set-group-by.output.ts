import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { PermissionSetCountAggregate } from './permission-set-count-aggregate.output';
import { PermissionSetAvgAggregate } from './permission-set-avg-aggregate.output';
import { PermissionSetSumAggregate } from './permission-set-sum-aggregate.output';
import { PermissionSetMinAggregate } from './permission-set-min-aggregate.output';
import { PermissionSetMaxAggregate } from './permission-set-max-aggregate.output';

@ObjectType()
export class PermissionSetGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    permissionSetId!: number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => String, {nullable:false})
    setName!: string;

    @Field(() => Boolean, {nullable:false})
    canReadWorkshopDetails!: boolean;

    @Field(() => Boolean, {nullable:false})
    canUpdateWorkshopDetails!: boolean;

    @Field(() => Boolean, {nullable:false})
    canModifyWorkshopDetails!: boolean;

    @Field(() => Boolean, {nullable:false})
    canReadEmployees!: boolean;

    @Field(() => Boolean, {nullable:false})
    canUpdateEmployees!: boolean;

    @Field(() => Boolean, {nullable:false})
    canModifyEmployees!: boolean;

    @Field(() => Boolean, {nullable:false})
    canReadCustomers!: boolean;

    @Field(() => Boolean, {nullable:false})
    canUpdateCustomers!: boolean;

    @Field(() => Boolean, {nullable:false})
    canModifyCustomers!: boolean;

    @Field(() => Boolean, {nullable:false})
    canReadServices!: boolean;

    @Field(() => Boolean, {nullable:false})
    canUpdateServices!: boolean;

    @Field(() => Boolean, {nullable:false})
    canModifyServices!: boolean;

    @Field(() => Boolean, {nullable:false})
    canReadTasks!: boolean;

    @Field(() => Boolean, {nullable:false})
    canUpdateTasks!: boolean;

    @Field(() => Boolean, {nullable:false})
    canModifyTasks!: boolean;

    @Field(() => Boolean, {nullable:false})
    canReadReports!: boolean;

    @Field(() => Boolean, {nullable:false})
    canGenerateReports!: boolean;

    @Field(() => Boolean, {nullable:false})
    canModifyPermissions!: boolean;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: bigint | number;

    @Field(() => PermissionSetCountAggregate, {nullable:true})
    _count?: PermissionSetCountAggregate;

    @Field(() => PermissionSetAvgAggregate, {nullable:true})
    _avg?: PermissionSetAvgAggregate;

    @Field(() => PermissionSetSumAggregate, {nullable:true})
    _sum?: PermissionSetSumAggregate;

    @Field(() => PermissionSetMinAggregate, {nullable:true})
    _min?: PermissionSetMinAggregate;

    @Field(() => PermissionSetMaxAggregate, {nullable:true})
    _max?: PermissionSetMaxAggregate;
}
