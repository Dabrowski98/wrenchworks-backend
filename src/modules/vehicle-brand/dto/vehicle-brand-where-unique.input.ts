import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { VehicleBrandWhereInput } from './vehicle-brand-where.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { VehicleModelListRelationFilter } from '../../vehicle-model/dto/vehicle-model-list-relation-filter.input';

@InputType()
export class VehicleBrandWhereUniqueInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Brand name must be a string' })
    @Validator.IsNotEmpty({ message: 'Brand name is required' })
    @Validator.Length(2, 50, { message: 'Brand name must be between 2 and 50 characters' })
    brandName?: string;

    @Field(() => [VehicleBrandWhereInput], {nullable:true})
    AND?: Array<VehicleBrandWhereInput>;

    @Field(() => [VehicleBrandWhereInput], {nullable:true})
    OR?: Array<VehicleBrandWhereInput>;

    @Field(() => [VehicleBrandWhereInput], {nullable:true})
    NOT?: Array<VehicleBrandWhereInput>;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => VehicleModelListRelationFilter, {nullable:true})
    vehicleModels?: VehicleModelListRelationFilter;
}
