import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AddressWorkshopScalarWhereWithAggregatesInput {

    @Field(() => [AddressWorkshopScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AddressWorkshopScalarWhereWithAggregatesInput>;

    @Field(() => [AddressWorkshopScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AddressWorkshopScalarWhereWithAggregatesInput>;

    @Field(() => [AddressWorkshopScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AddressWorkshopScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    addressId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
