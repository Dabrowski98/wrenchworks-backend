import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VehicleCountAggregate {

    @Field(() => Int, {nullable:false})
    vehicleId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    guestId!: number;

    @Field(() => Int, {nullable:false})
    customerId!: number;

    @Field(() => Int, {nullable:false})
    modelId!: number;

    @Field(() => Int, {nullable:false})
    deletedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
