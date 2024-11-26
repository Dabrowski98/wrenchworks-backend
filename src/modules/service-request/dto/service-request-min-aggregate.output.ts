import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestStatus } from '../../prisma/dto/service-request-status.enum';

@ObjectType()
export class ServiceRequestMinAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    resolvedAt?: Date | string;

    @Field(() => String, {nullable:true})
    resolvedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
