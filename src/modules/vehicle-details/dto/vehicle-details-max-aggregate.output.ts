import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { FuelType } from '../../prisma/dto/fuel-type.enum';
import { BodyColors } from '../../prisma/dto/body-colors.enum';

@ObjectType()
export class VehicleDetailsMaxAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleDetailsId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => Int, {nullable:true})
    yearOfProduction?: number;

    @Field(() => String, {nullable:true})
    VIN?: string;

    @Field(() => String, {nullable:true})
    engineCapacity?: string;

    @Field(() => String, {nullable:true})
    countryOfRegistration?: string;

    @Field(() => String, {nullable:true})
    licensePlate?: string;

    @Field(() => FuelType, {nullable:true})
    fuelType?: keyof typeof FuelType;

    @Field(() => String, {nullable:true})
    engineNo?: string;

    @Field(() => BodyColors, {nullable:true})
    bodyColor?: keyof typeof BodyColors;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
