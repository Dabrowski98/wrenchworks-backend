import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumServiceRequestsStatusNullableWithAggregatesFilter } from '../prisma/enum-service-requests-status-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../prisma/big-int-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

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

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    personId?: BigIntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    requestedAt?: DateTimeWithAggregatesFilter;

    @Field(() => EnumServiceRequestsStatusNullableWithAggregatesFilter, {nullable:true})
    status?: EnumServiceRequestsStatusNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    approvedServiceId?: BigIntNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;
}
