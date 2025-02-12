import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../../prisma/dto/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/dto/string-nullable-with-aggregates-filter.input';
import { EnumFuelTypeNullableWithAggregatesFilter } from '../../prisma/dto/enum-fuel-type-nullable-with-aggregates-filter.input';
import { EnumBodyColorNullableWithAggregatesFilter } from '../../prisma/dto/enum-body-color-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class VehicleDetailsScalarWhereWithAggregatesInput {

    @Field(() => [VehicleDetailsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VehicleDetailsScalarWhereWithAggregatesInput>;

    @Field(() => [VehicleDetailsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VehicleDetailsScalarWhereWithAggregatesInput>;

    @Field(() => [VehicleDetailsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VehicleDetailsScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    vehicleDetailsId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    vehicleId?: BigIntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    yearOfProduction?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    VIN?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    engineCapacity?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    countryOfRegistration?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    licensePlate?: StringNullableWithAggregatesFilter;

    @Field(() => EnumFuelTypeNullableWithAggregatesFilter, {nullable:true})
    fuelType?: EnumFuelTypeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    engineNo?: StringNullableWithAggregatesFilter;

    @Field(() => EnumBodyColorNullableWithAggregatesFilter, {nullable:true})
    bodyColor?: EnumBodyColorNullableWithAggregatesFilter;

    }