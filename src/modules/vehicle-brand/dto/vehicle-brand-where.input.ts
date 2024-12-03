import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { VehicleModelListRelationFilter } from '../../vehicle-model/dto/vehicle-model-list-relation-filter.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

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

    @Field(() => VehicleModelListRelationFilter, {nullable:true})
    @ValidateNested()
    @Type(() => VehicleModelListRelationFilter)
    vehicleModels?: VehicleModelListRelationFilter;
}