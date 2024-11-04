import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { VehicleNullableRelationFilter } from '../vehicle/vehicle-nullable-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleDetailsWhereInput {

    @Field(() => [VehicleDetailsWhereInput], {nullable:true})
    AND?: Array<VehicleDetailsWhereInput>;

    @Field(() => [VehicleDetailsWhereInput], {nullable:true})
    OR?: Array<VehicleDetailsWhereInput>;

    @Field(() => [VehicleDetailsWhereInput], {nullable:true})
    NOT?: Array<VehicleDetailsWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    vehicleDetailsId?: BigIntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    vehicleId?: BigIntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    yearOfProduction?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    VIN?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    engineCapacity?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    licensePlate?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fuelType?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    engineNo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bodyColor?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => VehicleNullableRelationFilter, {nullable:true})
    @Type(() => VehicleNullableRelationFilter)
    vehicle?: VehicleNullableRelationFilter;
}
