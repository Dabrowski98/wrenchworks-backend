import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceOtpWhereUniqueInput } from './workshop-device-otp-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceOtpCreateInput } from './workshop-device-otp-create.input';
import { WorkshopDeviceOtpUpdateInput } from './workshop-device-otp-update.input';

@ArgsType()
export class UpsertOneWorkshopDeviceOtpArgs {

    @Field(() => WorkshopDeviceOtpWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDeviceOtpWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopDeviceOtpWhereUniqueInput, 'WorkshopDeviceOtpId' | 'workshopId' | 'code'>;

    @Field(() => WorkshopDeviceOtpCreateInput, {nullable:false})
    @Type(() => WorkshopDeviceOtpCreateInput)
    create!: WorkshopDeviceOtpCreateInput;

    @Field(() => WorkshopDeviceOtpUpdateInput, {nullable:false})
    @Type(() => WorkshopDeviceOtpUpdateInput)
    update!: WorkshopDeviceOtpUpdateInput;
}
