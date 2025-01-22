import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceStatus } from '../../prisma/dto/service-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { ServiceCountAggregate } from './service-count-aggregate.output';
import { ServiceAvgAggregate } from './service-avg-aggregate.output';
import { ServiceSumAggregate } from './service-sum-aggregate.output';
import { ServiceMinAggregate } from './service-min-aggregate.output';
import { ServiceMaxAggregate } from './service-max-aggregate.output';

@ObjectType()
export class ServiceGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    serviceId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    customerId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint | number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    serviceDescription?: string;

    @Field(() => ServiceStatus, {nullable:true})
    status?: keyof typeof ServiceStatus;

    @Field(() => Boolean, {nullable:false})
    payedOff!: boolean;

    @Field(() => GraphQLDecimal, {nullable:false})
    paymentAmount!: Decimal;

    @Field(() => Date, {nullable:false})
    serviceStartDate!: Date | string;

    @Field(() => Date, {nullable:true})
    serviceEndDate?: Date | string;

    @Field(() => Date, {nullable:false})
    addedAt!: Date | string;

    @Field(() => String, {nullable:true})
    addedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    resolvedAt?: Date | string;

    @Field(() => String, {nullable:true})
    resolvedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ServiceCountAggregate, {nullable:true})
    _count?: ServiceCountAggregate;

    @Field(() => ServiceAvgAggregate, {nullable:true})
    _avg?: ServiceAvgAggregate;

    @Field(() => ServiceSumAggregate, {nullable:true})
    _sum?: ServiceSumAggregate;

    @Field(() => ServiceMinAggregate, {nullable:true})
    _min?: ServiceMinAggregate;

    @Field(() => ServiceMaxAggregate, {nullable:true})
    _max?: ServiceMaxAggregate;
}
