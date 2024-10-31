import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ServiceAvgAggregate {

    @Field(() => Float, {nullable:true})
    serviceId?: number;

    @Field(() => Float, {nullable:true})
    serviceRequestId?: number;

    @Field(() => Float, {nullable:true})
    workshopId?: number;

    @Field(() => Float, {nullable:true})
    vehicleId?: number;

    @Field(() => Float, {nullable:true})
    customerId?: number;

    @Field(() => Float, {nullable:true})
    employeeId?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    paymentAmount?: Decimal;
}
