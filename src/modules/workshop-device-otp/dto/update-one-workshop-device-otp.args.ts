import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOtpUpdateInput } from './workshop-device-otp-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceOtpWhereUniqueInput } from './workshop-device-otp-where-unique.input';

@ArgsType()
export class UpdateOneWorkshopDeviceOtpArgs {

    @Field(() => WorkshopDeviceOtpUpdateInput, {nullable:false})
    @Type(() => WorkshopDeviceOtpUpdateInput)
    @ValidateNested()
    data!: WorkshopDeviceOtpUpdateInput;

    @Field(() => WorkshopDeviceOtpWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDeviceOtpWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopDeviceOtpWhereUniqueInput, 'WorkshopDeviceOtpId' | 'workshopId' | 'code'>;
}
