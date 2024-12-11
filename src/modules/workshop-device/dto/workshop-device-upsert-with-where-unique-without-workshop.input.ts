import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceWhereUniqueInput } from './workshop-device-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceUpdateWithoutWorkshopInput } from './workshop-device-update-without-workshop.input';
import { ValidateNested } from 'class-validator';
import { WorkshopDeviceCreateWithoutWorkshopInput } from './workshop-device-create-without-workshop.input';

@InputType()
export class WorkshopDeviceUpsertWithWhereUniqueWithoutWorkshopInput {

    @Field(() => WorkshopDeviceWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDeviceWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopDeviceWhereUniqueInput, 'workshopDeviceId' | 'workshopId_serialNumber'>;

    @Field(() => WorkshopDeviceUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopDeviceUpdateWithoutWorkshopInput)
    @ValidateNested()
    update!: WorkshopDeviceUpdateWithoutWorkshopInput;

    @Field(() => WorkshopDeviceCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopDeviceCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: WorkshopDeviceCreateWithoutWorkshopInput;
}
