import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceStatus } from '../../prisma/dto/service-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ServiceMaxAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    customerId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    employeeId?: bigint | number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    serviceDescription?: string;

    @Field(() => ServiceStatus, {nullable:true})
    status?: keyof typeof ServiceStatus;

    @Field(() => Boolean, {nullable:true})
    payedOff?: boolean;

    @Field(() => GraphQLDecimal, {nullable:true})
    paymentAmount?: Decimal;

    @Field(() => Date, {nullable:true})
    serviceStartDate?: Date | string;

    @Field(() => Date, {nullable:true})
    serviceEndDate?: Date | string;

    @Field(() => Date, {nullable:true})
    addedAt?: Date | string;

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
}
