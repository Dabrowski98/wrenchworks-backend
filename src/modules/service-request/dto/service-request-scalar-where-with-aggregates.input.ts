import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../../prisma/dto/big-int-nullable-with-aggregates-filter.input';
import { EnumServiceRequestStatusNullableWithAggregatesFilter } from '../../prisma/dto/enum-service-request-status-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/dto/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/dto/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class ServiceRequestScalarWhereWithAggregatesInput {

    @Field(() => [ServiceRequestScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ServiceRequestScalarWhereWithAggregatesInput>;

    @Field(() => [ServiceRequestScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ServiceRequestScalarWhereWithAggregatesInput>;

    @Field(() => [ServiceRequestScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ServiceRequestScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    serviceRequestId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    vehicleId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    userId?: BigIntNullableWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    guestId?: BigIntNullableWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    approvedServiceId?: BigIntNullableWithAggregatesFilter;

    @Field(() => EnumServiceRequestStatusNullableWithAggregatesFilter, {nullable:true})
    status?: EnumServiceRequestStatusNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    resolvedAt?: DateTimeNullableWithAggregatesFilter;

    @HideField()
    resolvedBy?: BigIntNullableWithAggregatesFilter;

    @HideField()
    deletedAt?: DateTimeNullableWithAggregatesFilter;
}
