import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ServiceCountAggregate {

    @Field(() => Int, {nullable:false})
    serviceId!: number;

    @Field(() => Int, {nullable:false})
    serviceRequestId!: number;

    @Field(() => Int, {nullable:false})
    workshopId!: number;

    @Field(() => Int, {nullable:false})
    vehicleId!: number;

    @Field(() => Int, {nullable:false})
    customerId!: number;

    @Field(() => Int, {nullable:false})
    employeeId!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    serviceDescription!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    payedOff!: number;

    @Field(() => Int, {nullable:false})
    paymentAmount!: number;

    @Field(() => Int, {nullable:false})
    serviceStartDate!: number;

    @Field(() => Int, {nullable:false})
    serviceEndDate!: number;

    @Field(() => Int, {nullable:false})
    addedAt!: number;

    @Field(() => Int, {nullable:false})
    addedBy!: number;

    @Field(() => Int, {nullable:false})
    resolvedAt!: number;

    @Field(() => Int, {nullable:false})
    resolvedBy!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    updatedBy!: number;

    @Field(() => Int, {nullable:false})
    deletedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
