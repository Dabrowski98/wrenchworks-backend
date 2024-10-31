import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

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

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;
}
