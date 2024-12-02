import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { EnumCustomerCreationSourceFilter } from '../../prisma/dto/enum-customer-creation-source-filter.input';
import { BoolFilter } from '../../prisma/dto/bool-filter.input';
import { DecimalFilter } from '../../prisma/dto/decimal-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from '@nestjs/graphql';

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

    @Field(() => BigIntNullableFilter, {nullable:true})
    userId?: BigIntNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    guestId?: BigIntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstName?: StringNullableFilter;

    @Field(() => EnumCustomerCreationSourceFilter, {nullable:true})
    creationSource?: EnumCustomerCreationSourceFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    telephoneNumber?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isVerified?: BoolFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    totalDue?: DecimalFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    NIP?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    companyName?: StringNullableFilter;

    }