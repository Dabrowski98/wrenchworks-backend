import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLJSON } from 'graphql-type-json';
import { EmployeePermissionCountAggregate } from './employee-permission-count-aggregate.output';
import { EmployeePermissionAvgAggregate } from './employee-permission-avg-aggregate.output';
import { EmployeePermissionSumAggregate } from './employee-permission-sum-aggregate.output';
import { EmployeePermissionMinAggregate } from './employee-permission-min-aggregate.output';
import { EmployeePermissionMaxAggregate } from './employee-permission-max-aggregate.output';

@ObjectType()
export class EmployeePermissionGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    permissionId!: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    conditions?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => EmployeePermissionCountAggregate, {nullable:true})
    _count?: EmployeePermissionCountAggregate;

    @Field(() => EmployeePermissionAvgAggregate, {nullable:true})
    _avg?: EmployeePermissionAvgAggregate;

    @Field(() => EmployeePermissionSumAggregate, {nullable:true})
    _sum?: EmployeePermissionSumAggregate;

    @Field(() => EmployeePermissionMinAggregate, {nullable:true})
    _min?: EmployeePermissionMinAggregate;

    @Field(() => EmployeePermissionMaxAggregate, {nullable:true})
    _max?: EmployeePermissionMaxAggregate;
}
