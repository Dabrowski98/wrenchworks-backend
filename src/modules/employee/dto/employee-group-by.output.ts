import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { EmployeeStatus } from '../../prisma/dto/employee-status.enum';
import { EmployeeCountAggregate } from './employee-count-aggregate.output';
import { EmployeeAvgAggregate } from './employee-avg-aggregate.output';
import { EmployeeSumAggregate } from './employee-sum-aggregate.output';
import { EmployeeMinAggregate } from './employee-min-aggregate.output';
import { EmployeeMaxAggregate } from './employee-max-aggregate.output';

@ObjectType()
export class EmployeeGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    nickname?: string;

    @Field(() => String, {nullable:false})
    login!: string;

    @HideField()
    password!: string;

    @Field(() => String, {nullable:true})
    refreshToken?: string;

    @Field(() => EmployeeStatus, {nullable:false})
    status!: keyof typeof EmployeeStatus;

    @Field(() => Date, {nullable:false})
    joinedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: bigint | number;

    @Field(() => EmployeeCountAggregate, {nullable:true})
    _count?: EmployeeCountAggregate;

    @Field(() => EmployeeAvgAggregate, {nullable:true})
    _avg?: EmployeeAvgAggregate;

    @Field(() => EmployeeSumAggregate, {nullable:true})
    _sum?: EmployeeSumAggregate;

    @Field(() => EmployeeMinAggregate, {nullable:true})
    _min?: EmployeeMinAggregate;

    @Field(() => EmployeeMaxAggregate, {nullable:true})
    _max?: EmployeeMaxAggregate;
}
