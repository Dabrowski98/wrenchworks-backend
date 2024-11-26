import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../../prisma/dto/big-int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/dto/string-nullable-with-aggregates-filter.input';
import { EnumServicesStatusNullableWithAggregatesFilter } from '../../prisma/dto/enum-services-status-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../../prisma/dto/bool-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../../prisma/dto/decimal-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/dto/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ServiceScalarWhereWithAggregatesInput {

    @Field(() => [ServiceScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ServiceScalarWhereWithAggregatesInput)
    AND?: Array<ServiceScalarWhereWithAggregatesInput>;

    @Field(() => [ServiceScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ServiceScalarWhereWithAggregatesInput)
    OR?: Array<ServiceScalarWhereWithAggregatesInput>;

    @Field(() => [ServiceScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ServiceScalarWhereWithAggregatesInput)
    NOT?: Array<ServiceScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    serviceId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    serviceRequestId?: BigIntNullableWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    vehicleId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    customerId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    employeeId?: BigIntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => EnumServicesStatusNullableWithAggregatesFilter, {nullable:true})
    status?: EnumServicesStatusNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    payedOff?: BoolWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    paymentAmount?: DecimalWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    serviceStartDate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    serviceEndDate?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    addedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    addedBy?: BigIntNullableWithAggregatesFilter;

    @HideField()
    resolvedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    resolvedBy?: BigIntNullableWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    updatedBy?: BigIntNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;
}
