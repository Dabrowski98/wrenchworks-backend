import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { FuelType } from '../../prisma/dto/fuel-type.enum';
import { BodyColor } from '../../prisma/dto/body-color.enum';
import { Vehicle } from '../../vehicle/dto/vehicle.model';
import { Type } from 'class-transformer';

@ObjectType()
export class VehicleDetails {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleDetailsId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleId!: bigint;

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

    @Field(() => BodyColor, {nullable:true})
    bodyColor!: keyof typeof BodyColor | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Vehicle, {nullable:false})
    @Type(() => Vehicle)
    vehicle?: Vehicle;
}
