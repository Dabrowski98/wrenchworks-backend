import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VehicleDetailsCountAggregate {

    @Field(() => Int, {nullable:false})
    vehicleId!: number;

    @Field(() => Int, {nullable:false})
    yearOfProduction!: number;

    @Field(() => Int, {nullable:false})
    VIN!: number;

    @Field(() => Int, {nullable:false})
    engineCapacity!: number;

    @Field(() => Int, {nullable:false})
    licensePlate!: number;

    @Field(() => Int, {nullable:false})
    fuelType!: number;

    @Field(() => Int, {nullable:false})
    engineNo!: number;

    @Field(() => Int, {nullable:false})
    bodyColor!: number;

    @Field(() => Int, {nullable:false})
    deletedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
