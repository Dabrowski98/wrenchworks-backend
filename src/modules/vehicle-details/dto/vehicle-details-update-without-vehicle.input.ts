import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { FuelType } from '../../prisma/dto/fuel-type.enum';
import { BodyColors } from '../../prisma/dto/body-colors.enum';

@InputType()
export class VehicleDetailsUpdateWithoutVehicleInput {

    @Field(() => Int, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsInt({ message: 'Year of production must be an integer' })
    @Validator.Min(1900, { message: 'Year of production must be after 1900' })
    @Validator.Max(new Date().getFullYear(), { message: 'Year of production cannot be in the future' })
    yearOfProduction?: number;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsString({ message: 'VIN must be a string' })
    @Validator.Length(17, 17, { message: 'VIN must be exactly 17 characters' })
    @Validator.Matches(/^[A-HJ-NPR-Z0-9]{17}$/, { message: 'Invalid VIN format' })
    VIN?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsString({ message: 'Engine capacity must be a string' })
    @Validator.Length(1, 5, { message: 'Engine capacity must be between 1 and 5 characters' })
    engineCapacity?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsString({ message: 'Country of registration must be a string' })
    @Validator.Length(2, 2, { message: 'Country of registration must be exactly 2 characters' })
    @Validator.Matches(/^[A-Z]{2}$/, { message: 'Invalid country of registration format' })
    countryOfRegistration?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsString({ message: 'License plate must be a string' })
    @Validator.Length(1, 20, { message: 'License plate must be between 1 and 20 characters' })
    @Validator.Matches(/^[A-Z0-9]+$/, { message: 'Invalid license plate format' })
    licensePlate?: string;

    @Field(() => FuelType, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsEnum(FuelType, { message: 'Invalid fuel type' })
    fuelType?: keyof typeof FuelType;

    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsString({ message: 'Engine number must be a string' })
    @Validator.Length(2, 16, { message: 'Engine number must be between 2 and 16 characters' })
    engineNo?: string;

    @Field(() => BodyColors, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsEnum(BodyColors, { message: 'Invalid body color' })
    bodyColor?: keyof typeof BodyColors;
}
