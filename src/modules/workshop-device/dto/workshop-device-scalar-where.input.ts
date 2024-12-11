import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';

@InputType()
export class WorkshopDeviceScalarWhereInput {

    @Field(() => [WorkshopDeviceScalarWhereInput], {nullable:true})
    AND?: Array<WorkshopDeviceScalarWhereInput>;

    @Field(() => [WorkshopDeviceScalarWhereInput], {nullable:true})
    OR?: Array<WorkshopDeviceScalarWhereInput>;

    @Field(() => [WorkshopDeviceScalarWhereInput], {nullable:true})
    NOT?: Array<WorkshopDeviceScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    workshopDeviceId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    serialNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    deviceName?: StringFilter;

    }