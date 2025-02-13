import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/dto/string-with-aggregates-filter.input';
import { EnumWorkshopDeviceStatusNullableWithAggregatesFilter } from '../../prisma/dto/enum-workshop-device-status-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/dto/date-time-nullable-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../../prisma/dto/big-int-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class WorkshopDeviceScalarWhereWithAggregatesInput {

    @Field(() => [WorkshopDeviceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WorkshopDeviceScalarWhereWithAggregatesInput>;

    @Field(() => [WorkshopDeviceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WorkshopDeviceScalarWhereWithAggregatesInput>;

    @Field(() => [WorkshopDeviceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WorkshopDeviceScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopDeviceId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    serialNumber?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    deviceName?: StringWithAggregatesFilter;

    @Field(() => EnumWorkshopDeviceStatusNullableWithAggregatesFilter, {nullable:true})
    status?: EnumWorkshopDeviceStatusNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    lastLoginAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    lastLoginBy?: BigIntNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    acceptedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    acceptedBy?: BigIntNullableWithAggregatesFilter;
}