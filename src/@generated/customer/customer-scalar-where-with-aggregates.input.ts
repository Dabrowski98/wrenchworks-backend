import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class CustomerScalarWhereWithAggregatesInput {

    @Field(() => [CustomerScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => CustomerScalarWhereWithAggregatesInput)
    AND?: Array<CustomerScalarWhereWithAggregatesInput>;

    @Field(() => [CustomerScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => CustomerScalarWhereWithAggregatesInput)
    OR?: Array<CustomerScalarWhereWithAggregatesInput>;

    @Field(() => [CustomerScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => CustomerScalarWhereWithAggregatesInput)
    NOT?: Array<CustomerScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    customerId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    totalDue?: DecimalWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    NIP?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    companyName?: StringNullableWithAggregatesFilter;
}
