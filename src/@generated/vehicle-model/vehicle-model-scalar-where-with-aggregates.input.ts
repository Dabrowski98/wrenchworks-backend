import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

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
    brandName?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;
}
