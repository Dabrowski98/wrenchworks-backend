import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceWhereUniqueInput } from './workshop-device-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneWorkshopDeviceArgs {

    @Field(() => WorkshopDeviceWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDeviceWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopDeviceWhereUniqueInput, 'workshopDeviceId' | 'workshopId_serialNumber'>;
}
