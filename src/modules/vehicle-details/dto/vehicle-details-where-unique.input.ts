import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { VehicleDetailsWhereInput } from './vehicle-details-where.input';
import { IntNullableFilter } from '../../prisma/dto/int-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { EnumFuelTypeNullableFilter } from '../../prisma/dto/enum-fuel-type-nullable-filter.input';
import { EnumBodyColorsNullableFilter } from '../../prisma/dto/enum-body-colors-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { VehicleNullableRelationFilter } from '../../vehicle/dto/vehicle-nullable-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleDetailsWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleDetailsId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => [VehicleDetailsWhereInput], {nullable:true})
    AND?: Array<VehicleDetailsWhereInput>;

    @Field(() => [VehicleDetailsWhereInput], {nullable:true})
    OR?: Array<VehicleDetailsWhereInput>;

    @Field(() => [VehicleDetailsWhereInput], {nullable:true})
    NOT?: Array<VehicleDetailsWhereInput>;

    @Field(() => IntNullableFilter, {nullable:true})
    yearOfProduction?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    VIN?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    engineCapacity?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    countryOfRegistration?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    licensePlate?: StringNullableFilter;

    @Field(() => EnumFuelTypeNullableFilter, {nullable:true})
    fuelType?: EnumFuelTypeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    engineNo?: StringNullableFilter;

    @Field(() => EnumBodyColorsNullableFilter, {nullable:true})
    bodyColor?: EnumBodyColorsNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => VehicleNullableRelationFilter, {nullable:true})
    @Type(() => VehicleNullableRelationFilter)
    vehicle?: VehicleNullableRelationFilter;
}
