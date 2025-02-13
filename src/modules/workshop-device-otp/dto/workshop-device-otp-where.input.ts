import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopDeviceOtpWhereInput {

    @Field(() => [WorkshopDeviceOtpWhereInput], {nullable:true})
    AND?: Array<WorkshopDeviceOtpWhereInput>;

    @Field(() => [WorkshopDeviceOtpWhereInput], {nullable:true})
    OR?: Array<WorkshopDeviceOtpWhereInput>;

    @Field(() => [WorkshopDeviceOtpWhereInput], {nullable:true})
    NOT?: Array<WorkshopDeviceOtpWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    WorkshopDeviceOtpId?: BigIntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    employeeId?: BigIntNullableFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: DateTimeFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}
