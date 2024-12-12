import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/dto/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/dto/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class WorkshopDeviceOTPScalarWhereWithAggregatesInput {

    @Field(() => [WorkshopDeviceOTPScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WorkshopDeviceOTPScalarWhereWithAggregatesInput>;

    @Field(() => [WorkshopDeviceOTPScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WorkshopDeviceOTPScalarWhereWithAggregatesInput>;

    @Field(() => [WorkshopDeviceOTPScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WorkshopDeviceOTPScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopDeviceOTPId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    employeeId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    workshopId?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiresAt?: DateTimeWithAggregatesFilter;

    }