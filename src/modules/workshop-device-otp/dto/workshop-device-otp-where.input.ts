import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopDeviceOTPWhereInput {

    @Field(() => [WorkshopDeviceOTPWhereInput], {nullable:true})
    AND?: Array<WorkshopDeviceOTPWhereInput>;

    @Field(() => [WorkshopDeviceOTPWhereInput], {nullable:true})
    OR?: Array<WorkshopDeviceOTPWhereInput>;

    @Field(() => [WorkshopDeviceOTPWhereInput], {nullable:true})
    NOT?: Array<WorkshopDeviceOTPWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    workshopDeviceOTPId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    employeeId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: DateTimeFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}