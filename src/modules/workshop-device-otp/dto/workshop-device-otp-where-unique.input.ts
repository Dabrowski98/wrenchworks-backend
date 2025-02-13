import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { WorkshopDeviceOtpWhereInput } from './workshop-device-otp-where.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopDeviceOtpWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    WorkshopDeviceOtpId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Code must be a string' })
    @Validator.Length(7, 7, { message: 'Code must be exactly 7 characters' })
    @Validator.Matches(/^[0-9]{7}$/, { message: 'Invalid code format' })
    @Validator.IsNotEmpty()
    code?: string;

    @Field(() => [WorkshopDeviceOtpWhereInput], {nullable:true})
    AND?: Array<WorkshopDeviceOtpWhereInput>;

    @Field(() => [WorkshopDeviceOtpWhereInput], {nullable:true})
    OR?: Array<WorkshopDeviceOtpWhereInput>;

    @Field(() => [WorkshopDeviceOtpWhereInput], {nullable:true})
    NOT?: Array<WorkshopDeviceOtpWhereInput>;

    @Field(() => BigIntNullableFilter, {nullable:true})
    employeeId?: BigIntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: DateTimeFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}