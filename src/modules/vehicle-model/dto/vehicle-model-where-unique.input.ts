import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { VehicleModelModelNameBrandNameCompoundUniqueInput } from './vehicle-model-model-name-brand-name-compound-unique.input';
import { VehicleModelWhereInput } from './vehicle-model-where.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { VehicleListRelationFilter } from '../../vehicle/dto/vehicle-list-relation-filter.input';
import { Type } from 'class-transformer';
import { VehicleBrandRelationFilter } from '../../vehicle-brand/dto/vehicle-brand-relation-filter.input';

@InputType()
export class VehicleModelWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    modelId?: bigint | number;

    @Field(() => VehicleModelModelNameBrandNameCompoundUniqueInput, {nullable:true})
    modelName_brandName?: VehicleModelModelNameBrandNameCompoundUniqueInput;

    @Field(() => [VehicleModelWhereInput], {nullable:true})
    AND?: Array<VehicleModelWhereInput>;

    @Field(() => [VehicleModelWhereInput], {nullable:true})
    OR?: Array<VehicleModelWhereInput>;

    @Field(() => [VehicleModelWhereInput], {nullable:true})
    NOT?: Array<VehicleModelWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    modelName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    brandName?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => VehicleListRelationFilter, {nullable:true})
    @Type(() => VehicleListRelationFilter)
    vehicles?: VehicleListRelationFilter;

    @Field(() => VehicleBrandRelationFilter, {nullable:true})
    vehiclesBrand?: VehicleBrandRelationFilter;
}
