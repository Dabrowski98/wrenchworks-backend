import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

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

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    personId?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    brandName?: StringWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    modelId?: BigIntWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;
}
