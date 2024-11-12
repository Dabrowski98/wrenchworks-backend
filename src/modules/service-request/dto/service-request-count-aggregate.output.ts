import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ServiceRequestCountAggregate {

    @Field(() => Int, {nullable:false})
    serviceRequestId!: number;

    @Field(() => Int, {nullable:false})
    workshopId!: number;

    @Field(() => Int, {nullable:false})
    vehicleId!: number;

    @Field(() => Int, {nullable:false})
    personId!: number;

    @Field(() => Int, {nullable:false})
    requestedAt!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    approvedServiceId!: number;

    @Field(() => Int, {nullable:false})
    deletedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
