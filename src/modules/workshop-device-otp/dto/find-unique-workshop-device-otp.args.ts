import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceOtpWhereUniqueInput } from './workshop-device-otp-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueWorkshopDeviceOtpArgs {

    @Field(() => WorkshopDeviceOtpWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDeviceOtpWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopDeviceOtpWhereUniqueInput, 'WorkshopDeviceOtpId' | 'workshopId' | 'code'>;
}
