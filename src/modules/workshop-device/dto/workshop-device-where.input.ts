import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopDeviceWhereInput {

    @Field(() => [WorkshopDeviceWhereInput], {nullable:true})
    AND?: Array<WorkshopDeviceWhereInput>;

    @Field(() => [WorkshopDeviceWhereInput], {nullable:true})
    OR?: Array<WorkshopDeviceWhereInput>;

    @Field(() => [WorkshopDeviceWhereInput], {nullable:true})
    NOT?: Array<WorkshopDeviceWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    workshopDeviceId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    serialNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    deviceName?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastLoginAt?: DateTimeNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    lastLoginBy?: BigIntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    acceptedAt?: DateTimeFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    acceptedBy?: BigIntNullableFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}