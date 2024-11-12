import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { FuelType } from '../../prisma/dto/fuel-type.enum';
import { BodyColors } from '../../prisma/dto/body-colors.enum';
import { Vehicle } from '../../vehicle/dto/vehicle.model';

@ObjectType()
export class VehicleDetails {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleDetailsId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId!: bigint | null;

    @Field(() => Int, {nullable:true})
    yearOfProduction!: number | null;

    @Field(() => String, {nullable:true})
    VIN!: string | null;

    @Field(() => String, {nullable:true})
    engineCapacity!: string | null;

    @Field(() => String, {nullable:true})
    countryOfRegistration!: string | null;

    @Field(() => String, {nullable:true})
    licensePlate!: string | null;

    @Field(() => FuelType, {nullable:true})
    fuelType!: keyof typeof FuelType | null;

    @Field(() => String, {nullable:true})
    engineNo!: string | null;

    @Field(() => BodyColors, {nullable:true})
    bodyColor!: keyof typeof BodyColors | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Vehicle, {nullable:true})
    vehicle?: Vehicle | null;
}
