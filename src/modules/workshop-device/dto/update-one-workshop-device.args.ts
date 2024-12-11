import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceUpdateInput } from './workshop-device-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceWhereUniqueInput } from './workshop-device-where-unique.input';

@ArgsType()
export class UpdateOneWorkshopDeviceArgs {

    @Field(() => WorkshopDeviceUpdateInput, {nullable:false})
    @Type(() => WorkshopDeviceUpdateInput)
    @ValidateNested()
    data!: WorkshopDeviceUpdateInput;

    @Field(() => WorkshopDeviceWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDeviceWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopDeviceWhereUniqueInput, 'workshopDeviceId' | 'workshopId_serialNumber'>;
}
