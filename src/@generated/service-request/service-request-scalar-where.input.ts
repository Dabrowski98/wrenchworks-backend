import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumServiceRequestsStatusNullableFilter } from '../prisma/enum-service-requests-status-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ServiceRequestScalarWhereInput {

    @Field(() => [ServiceRequestScalarWhereInput], {nullable:true})
    AND?: Array<ServiceRequestScalarWhereInput>;

    @Field(() => [ServiceRequestScalarWhereInput], {nullable:true})
    OR?: Array<ServiceRequestScalarWhereInput>;

    @Field(() => [ServiceRequestScalarWhereInput], {nullable:true})
    NOT?: Array<ServiceRequestScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    serviceRequestId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    vehicleId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    personId?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    requestedAt?: DateTimeFilter;

    @Field(() => EnumServiceRequestsStatusNullableFilter, {nullable:true})
    status?: EnumServiceRequestsStatusNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    approvedServiceId?: BigIntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;
}
