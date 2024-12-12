import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceOTPWhereUniqueInput } from './workshop-device-otp-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceOTPCreateWithoutWorkshopInput } from './workshop-device-otp-create-without-workshop.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopDeviceOTPCreateOrConnectWithoutWorkshopInput {

    @Field(() => WorkshopDeviceOTPWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDeviceOTPWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopDeviceOTPWhereUniqueInput, 'workshopDeviceOTPId' | 'workshopId' | 'code'>;

    @Field(() => WorkshopDeviceOTPCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopDeviceOTPCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: WorkshopDeviceOTPCreateWithoutWorkshopInput;
}
