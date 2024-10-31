import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AddressPersonScalarWhereWithAggregatesInput {

    @Field(() => [AddressPersonScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AddressPersonScalarWhereWithAggregatesInput>;

    @Field(() => [AddressPersonScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AddressPersonScalarWhereWithAggregatesInput>;

    @Field(() => [AddressPersonScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AddressPersonScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    addressId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    personId?: BigIntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
