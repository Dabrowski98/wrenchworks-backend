import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { FuelType } from '../../prisma/dto/fuel-type.enum';
import { BodyColor } from '../../prisma/dto/body-color.enum';
import { VehicleDetailsCountAggregate } from './vehicle-details-count-aggregate.output';
import { VehicleDetailsAvgAggregate } from './vehicle-details-avg-aggregate.output';
import { VehicleDetailsSumAggregate } from './vehicle-details-sum-aggregate.output';
import { VehicleDetailsMinAggregate } from './vehicle-details-min-aggregate.output';
import { VehicleDetailsMaxAggregate } from './vehicle-details-max-aggregate.output';

@ObjectType()
export class VehicleDetailsGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleDetailsId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleId!: bigint | number;

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

    @Field(() => BodyColor, {nullable:true})
    bodyColor?: keyof typeof BodyColor;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => VehicleDetailsCountAggregate, {nullable:true})
    _count?: VehicleDetailsCountAggregate;

    @Field(() => VehicleDetailsAvgAggregate, {nullable:true})
    _avg?: VehicleDetailsAvgAggregate;

    @Field(() => VehicleDetailsSumAggregate, {nullable:true})
    _sum?: VehicleDetailsSumAggregate;

    @Field(() => VehicleDetailsMinAggregate, {nullable:true})
    _min?: VehicleDetailsMinAggregate;

    @Field(() => VehicleDetailsMaxAggregate, {nullable:true})
    _max?: VehicleDetailsMaxAggregate;
}
