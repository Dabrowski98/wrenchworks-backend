import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../../prisma/dto/big-int-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class VehicleScalarWhereWithAggregatesInput {

    @Field(() => [VehicleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VehicleScalarWhereWithAggregatesInput>;

    @Field(() => [VehicleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VehicleScalarWhereWithAggregatesInput>;

    @Field(() => [VehicleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VehicleScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    vehicleId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    userId?: BigIntNullableWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    guestId?: BigIntNullableWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    modelId?: BigIntWithAggregatesFilter;

    }