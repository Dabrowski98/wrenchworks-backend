import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceWhereUniqueInput } from './workshop-device-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceCreateInput } from './workshop-device-create.input';
import { WorkshopDeviceUpdateInput } from './workshop-device-update.input';

@ArgsType()
export class UpsertOneWorkshopDeviceArgs {

    @Field(() => WorkshopDeviceWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDeviceWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopDeviceWhereUniqueInput, 'workshopDeviceId' | 'workshopId_serialNumber'>;

    @Field(() => WorkshopDeviceCreateInput, {nullable:false})
    @Type(() => WorkshopDeviceCreateInput)
    create!: WorkshopDeviceCreateInput;

    @Field(() => WorkshopDeviceUpdateInput, {nullable:false})
    @Type(() => WorkshopDeviceUpdateInput)
    update!: WorkshopDeviceUpdateInput;
}
