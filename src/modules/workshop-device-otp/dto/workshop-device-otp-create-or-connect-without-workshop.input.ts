import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceOtpWhereUniqueInput } from './workshop-device-otp-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceOtpCreateWithoutWorkshopInput } from './workshop-device-otp-create-without-workshop.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopDeviceOtpCreateOrConnectWithoutWorkshopInput {

    @Field(() => WorkshopDeviceOtpWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDeviceOtpWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopDeviceOtpWhereUniqueInput, 'WorkshopDeviceOtpId' | 'workshopId' | 'code'>;

    @Field(() => WorkshopDeviceOtpCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopDeviceOtpCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: WorkshopDeviceOtpCreateWithoutWorkshopInput;
}
