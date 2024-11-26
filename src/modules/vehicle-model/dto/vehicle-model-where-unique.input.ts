import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { VehicleModelModelNameBrandCompoundUniqueInput } from './vehicle-model-model-name-brand-compound-unique.input';
import { VehicleModelWhereInput } from './vehicle-model-where.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from 'nestjs-graphql';
import { VehicleListRelationFilter } from '../../vehicle/dto/vehicle-list-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleBrandRelationFilter } from '../../vehicle-brand/dto/vehicle-brand-relation-filter.input';

@InputType()
export class VehicleModelWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    modelId?: bigint | number;

    @Field(() => VehicleModelModelNameBrandCompoundUniqueInput, {nullable:true})
    modelName_brand?: VehicleModelModelNameBrandCompoundUniqueInput;

    @Field(() => [VehicleModelWhereInput], {nullable:true})
    AND?: Array<VehicleModelWhereInput>;

    @Field(() => [VehicleModelWhereInput], {nullable:true})
    OR?: Array<VehicleModelWhereInput>;

    @Field(() => [VehicleModelWhereInput], {nullable:true})
    NOT?: Array<VehicleModelWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    modelName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    brand?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    @HideField()
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @Field(() => VehicleListRelationFilter, {nullable:true})
    @Type(() => VehicleListRelationFilter)
    @ValidateNested()
    @Type(() => VehicleListRelationFilter)
    vehicles?: VehicleListRelationFilter;

    @Field(() => VehicleBrandRelationFilter, {nullable:true})
    @ValidateNested()
    @Type(() => VehicleBrandRelationFilter)
    vehiclesBrand?: VehicleBrandRelationFilter;
}
