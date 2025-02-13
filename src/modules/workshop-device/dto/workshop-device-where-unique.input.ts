import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { WorkshopDeviceWorkshopIdSerialNumberCompoundUniqueInput } from './workshop-device-workshop-id-serial-number-compound-unique.input';
import { WorkshopDeviceWhereInput } from './workshop-device-where.input';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { EnumWorkshopDeviceStatusNullableFilter } from '../../prisma/dto/enum-workshop-device-status-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopDeviceWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopDeviceId?: bigint | number;

    @Field(() => WorkshopDeviceWorkshopIdSerialNumberCompoundUniqueInput, {nullable:true})
    workshopId_serialNumber?: WorkshopDeviceWorkshopIdSerialNumberCompoundUniqueInput;

    @Field(() => [WorkshopDeviceWhereInput], {nullable:true})
    AND?: Array<WorkshopDeviceWhereInput>;

    @Field(() => [WorkshopDeviceWhereInput], {nullable:true})
    OR?: Array<WorkshopDeviceWhereInput>;

    @Field(() => [WorkshopDeviceWhereInput], {nullable:true})
    NOT?: Array<WorkshopDeviceWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    serialNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    deviceName?: StringFilter;

    @Field(() => EnumWorkshopDeviceStatusNullableFilter, {nullable:true})
    status?: EnumWorkshopDeviceStatusNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastLoginAt?: DateTimeNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    lastLoginBy?: BigIntNullableFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    updatedBy?: BigIntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    acceptedAt?: DateTimeNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    acceptedBy?: BigIntNullableFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}
