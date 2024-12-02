import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../../prisma/dto/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class VehicleBrandScalarWhereWithAggregatesInput {

    @Field(() => [VehicleBrandScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VehicleBrandScalarWhereWithAggregatesInput>;

    @Field(() => [VehicleBrandScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VehicleBrandScalarWhereWithAggregatesInput>;

    @Field(() => [VehicleBrandScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VehicleBrandScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    brandName?: StringWithAggregatesFilter;

    }