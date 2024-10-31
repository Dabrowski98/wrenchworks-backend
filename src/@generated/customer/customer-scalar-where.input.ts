import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class CustomerScalarWhereInput {

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    @Type(() => CustomerScalarWhereInput)
    AND?: Array<CustomerScalarWhereInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    @Type(() => CustomerScalarWhereInput)
    OR?: Array<CustomerScalarWhereInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    @Type(() => CustomerScalarWhereInput)
    NOT?: Array<CustomerScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    customerId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    totalDue?: DecimalFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    NIP?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    companyName?: StringNullableFilter;
}
