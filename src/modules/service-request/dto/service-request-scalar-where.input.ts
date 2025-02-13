import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { EnumServiceRequestStatusNullableFilter } from '../../prisma/dto/enum-service-request-status-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';

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

    @Field(() => BigIntNullableFilter, {nullable:true})
    userId?: BigIntNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    guestId?: BigIntNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    approvedServiceId?: BigIntNullableFilter;

    @Field(() => EnumServiceRequestStatusNullableFilter, {nullable:true})
    status?: EnumServiceRequestStatusNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    resolvedAt?: DateTimeNullableFilter;

    @HideField()
    resolvedBy?: BigIntNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;
}
