import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { Vehicle } from '../vehicle/vehicle.model';

@ObjectType()
export class VehicleDetails {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleId!: bigint;

    @Field(() => Int, {nullable:true})
    yearOfProduction!: number | null;

    @Field(() => String, {nullable:true})
    VIN!: string | null;

    @Field(() => String, {nullable:true})
    engineCapacity!: string | null;

    @Field(() => String, {nullable:true})
    licensePlate!: string | null;

    @Field(() => String, {nullable:true})
    fuelType!: string | null;

    @Field(() => String, {nullable:true})
    engineNo!: string | null;

    @Field(() => String, {nullable:true})
    bodyColor!: string | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Vehicle, {nullable:false})
    vehicle?: Vehicle;
}
