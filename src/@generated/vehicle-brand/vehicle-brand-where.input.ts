import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { VehicleListRelationFilter } from '../vehicle/vehicle-list-relation-filter.input';
import { Type } from 'class-transformer';
import { VehicleModelListRelationFilter } from '../vehicle-model/vehicle-model-list-relation-filter.input';

@InputType()
export class VehicleBrandWhereInput {

    @Field(() => [VehicleBrandWhereInput], {nullable:true})
    AND?: Array<VehicleBrandWhereInput>;

    @Field(() => [VehicleBrandWhereInput], {nullable:true})
    OR?: Array<VehicleBrandWhereInput>;

    @Field(() => [VehicleBrandWhereInput], {nullable:true})
    NOT?: Array<VehicleBrandWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    brandName?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => VehicleListRelationFilter, {nullable:true})
    @Type(() => VehicleListRelationFilter)
    vehicles?: VehicleListRelationFilter;

    @Field(() => VehicleModelListRelationFilter, {nullable:true})
    vehicleModels?: VehicleModelListRelationFilter;
}
