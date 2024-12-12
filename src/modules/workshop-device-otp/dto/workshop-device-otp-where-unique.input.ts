import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { WorkshopDeviceOTPWhereInput } from './workshop-device-otp-where.input';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopDeviceOTPWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopDeviceOTPId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Code must be a string' })
    @Validator.Length(7, 7, { message: 'Code must be exactly 7 characters' })
    @Validator.Matches(/^[0-9]{7}$/, { message: 'Invalid code format' })
    @Validator.IsNotEmpty()
    code?: string;

    @Field(() => [WorkshopDeviceOTPWhereInput], {nullable:true})
    AND?: Array<WorkshopDeviceOTPWhereInput>;

    @Field(() => [WorkshopDeviceOTPWhereInput], {nullable:true})
    OR?: Array<WorkshopDeviceOTPWhereInput>;

    @Field(() => [WorkshopDeviceOTPWhereInput], {nullable:true})
    NOT?: Array<WorkshopDeviceOTPWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    employeeId?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: DateTimeFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}