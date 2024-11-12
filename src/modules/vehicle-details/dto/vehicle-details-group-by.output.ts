import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { FuelType } from '../../prisma/dto/fuel-type.enum';
import { BodyColors } from '../../prisma/dto/body-colors.enum';
import { VehicleDetailsCountAggregate } from './vehicle-details-count-aggregate.output';
import { VehicleDetailsAvgAggregate } from './vehicle-details-avg-aggregate.output';
import { VehicleDetailsSumAggregate } from './vehicle-details-sum-aggregate.output';
import { VehicleDetailsMinAggregate } from './vehicle-details-min-aggregate.output';
import { VehicleDetailsMaxAggregate } from './vehicle-details-max-aggregate.output';

@ObjectType()
export class VehicleDetailsGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleDetailsId!: bigint | number;

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
