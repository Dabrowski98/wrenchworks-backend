import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ServiceRequestAvgAggregate {

    @Field(() => Float, {nullable:true})
    serviceRequestId?: number;

    @Field(() => Float, {nullable:true})
    workshopId?: number;

    @Field(() => Float, {nullable:true})
    vehicleId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    guestId?: number;

    @Field(() => Float, {nullable:true})
    approvedServiceId?: number;

    @Field(() => Float, {nullable:true})
    resolvedBy?: number;
}
