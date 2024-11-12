import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServicesStatus } from '../../prisma/dto/services-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ServiceMinAggregate {

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

    @Field(() => ServicesStatus, {nullable:true})
    status?: keyof typeof ServicesStatus;

    @Field(() => Boolean, {nullable:true})
    payedOff?: boolean;

    @Field(() => GraphQLDecimal, {nullable:true})
    paymentAmount?: Decimal;

    @Field(() => Date, {nullable:true})
    serviceStartDate?: Date | string;

    @Field(() => Date, {nullable:true})
    serviceEndDate?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
