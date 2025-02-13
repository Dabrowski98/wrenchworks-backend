import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../../prisma/dto/big-int-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/dto/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/dto/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class WorkshopDeviceOtpScalarWhereWithAggregatesInput {

    @Field(() => [WorkshopDeviceOtpScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WorkshopDeviceOtpScalarWhereWithAggregatesInput>;

    @Field(() => [WorkshopDeviceOtpScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WorkshopDeviceOtpScalarWhereWithAggregatesInput>;

    @Field(() => [WorkshopDeviceOtpScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WorkshopDeviceOtpScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    WorkshopDeviceOtpId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    employeeId?: BigIntNullableWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiresAt?: DateTimeWithAggregatesFilter;

    }