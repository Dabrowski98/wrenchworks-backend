import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumServicesStatusNullableFilter } from '../prisma/enum-services-status-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ServiceScalarWhereInput {

    @Field(() => [ServiceScalarWhereInput], {nullable:true})
    @Type(() => ServiceScalarWhereInput)
    AND?: Array<ServiceScalarWhereInput>;

    @Field(() => [ServiceScalarWhereInput], {nullable:true})
    @Type(() => ServiceScalarWhereInput)
    OR?: Array<ServiceScalarWhereInput>;

    @Field(() => [ServiceScalarWhereInput], {nullable:true})
    @Type(() => ServiceScalarWhereInput)
    NOT?: Array<ServiceScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    serviceId?: BigIntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    serviceRequestId?: BigIntNullableFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    vehicleId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    customerId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    employeeId?: BigIntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumServicesStatusNullableFilter, {nullable:true})
    status?: EnumServicesStatusNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    payedOff?: BoolFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    paymentAmount?: DecimalFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    serviceStartDate?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    serviceEndDate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;
}
