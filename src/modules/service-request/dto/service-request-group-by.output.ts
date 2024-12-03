import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestStatus } from '../../prisma/dto/service-request-status.enum';
import { ServiceRequestCountAggregate } from './service-request-count-aggregate.output';
import { ServiceRequestAvgAggregate } from './service-request-avg-aggregate.output';
import { ServiceRequestSumAggregate } from './service-request-sum-aggregate.output';
import { ServiceRequestMinAggregate } from './service-request-min-aggregate.output';
import { ServiceRequestMaxAggregate } from './service-request-max-aggregate.output';

@ObjectType()
export class ServiceRequestGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    serviceRequestId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    approvedServiceId?: bigint | number;

    @Field(() => ServiceRequestStatus, {nullable:true})
    status?: keyof typeof ServiceRequestStatus;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    resolvedAt?: Date | string;

    @Field(() => String, {nullable:true})
    resolvedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ServiceRequestCountAggregate, {nullable:true})
    _count?: ServiceRequestCountAggregate;

    @Field(() => ServiceRequestAvgAggregate, {nullable:true})
    _avg?: ServiceRequestAvgAggregate;

    @Field(() => ServiceRequestSumAggregate, {nullable:true})
    _sum?: ServiceRequestSumAggregate;

    @Field(() => ServiceRequestMinAggregate, {nullable:true})
    _min?: ServiceRequestMinAggregate;

    @Field(() => ServiceRequestMaxAggregate, {nullable:true})
    _max?: ServiceRequestMaxAggregate;
}
