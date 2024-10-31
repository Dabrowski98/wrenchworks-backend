import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { VehicleRelationFilter } from '../vehicle/vehicle-relation-filter.input';
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
    vehicleId?: BigIntFilter;

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

    @Field(() => VehicleRelationFilter, {nullable:true})
    @Type(() => VehicleRelationFilter)
    vehicle?: VehicleRelationFilter;
}
