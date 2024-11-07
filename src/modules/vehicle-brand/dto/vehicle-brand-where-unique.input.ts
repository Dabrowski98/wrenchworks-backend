import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleBrandWhereInput } from './vehicle-brand-where.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { VehicleModelListRelationFilter } from '../vehicle-model/vehicle-model-list-relation-filter.input';

@InputType()
export class VehicleBrandWhereUniqueInput {

    @Field(() => String, {nullable:true})
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
