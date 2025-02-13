import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { FuelType } from '../../prisma/dto/fuel-type.enum';
import { BodyColor } from '../../prisma/dto/body-color.enum';
import { Vehicle } from '../../vehicle/dto/vehicle.model';
import { Type } from 'class-transformer';

/**
 * The VehicleDetails model provides additional details for a vehicle such as year of production, VIN, and engine capacity.
 * It enhances the vehicle information with technical specifications and registration details.
 */
@ObjectType({description:'The VehicleDetails model provides additional details for a vehicle such as year of production, VIN, and engine capacity.\nIt enhances the vehicle information with technical specifications and registration details.'})
export class VehicleDetails {

    /**
     * Identifier of the vehicle details record
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the vehicle details record'})
    vehicleDetailsId!: bigint;

    /**
     * Identifier of the associated vehicle
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the associated vehicle'})
    vehicleId!: bigint;

    /**
     * Manufacturing year of the vehicle
     */
    @Field(() => Int, {nullable:true,description:'Manufacturing year of the vehicle'})
    yearOfProduction!: number | null;

    /**
     * Vehicle Identification Number
     */
    @Field(() => String, {nullable:true,description:'Vehicle Identification Number'})
    VIN!: string | null;

    /**
     * Engine size/capacity
     */
    @Field(() => String, {nullable:true,description:'Engine size/capacity'})
    engineCapacity!: string | null;

    /**
     * Country where vehicle is registered
     */
    @Field(() => String, {nullable:true,description:'Country where vehicle is registered'})
    countryOfRegistration!: string | null;

    /**
     * Vehicle registration plate number
     */
    @Field(() => String, {nullable:true,description:'Vehicle registration plate number'})
    licensePlate!: string | null;

    /**
     * Type of fuel used by the vehicle
     */
    @Field(() => FuelType, {nullable:true,description:'Type of fuel used by the vehicle'})
    fuelType!: keyof typeof FuelType | null;

    /**
     * Engine serial number
     */
    @Field(() => String, {nullable:true,description:'Engine serial number'})
    engineNo!: string | null;

    /**
     * Color of the vehicle body
     */
    @Field(() => BodyColor, {nullable:true,description:'Color of the vehicle body'})
    bodyColor!: keyof typeof BodyColor | null;

    /**
     * Timestamp when record was deleted
     */
    @Field(() => Date, {nullable:true,description:'Timestamp when record was deleted'})
    deletedAt!: Date | null;

    /**
     * Associated vehicle record
     */
    @Field(() => Vehicle, {nullable:false,description:'Associated vehicle record'})
    @Type(() => Vehicle)
    vehicle?: Vehicle;
}
