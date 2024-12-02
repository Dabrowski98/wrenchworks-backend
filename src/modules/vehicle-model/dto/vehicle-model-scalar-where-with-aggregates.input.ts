import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/dto/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class VehicleModelScalarWhereWithAggregatesInput {

    @Field(() => [VehicleModelScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VehicleModelScalarWhereWithAggregatesInput>;

    @Field(() => [VehicleModelScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VehicleModelScalarWhereWithAggregatesInput>;

    @Field(() => [VehicleModelScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VehicleModelScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    modelId?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    modelName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    brand?: StringWithAggregatesFilter;

    }