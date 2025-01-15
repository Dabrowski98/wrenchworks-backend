import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceOtpUpdateWithoutWorkshopInput } from './workshop-device-otp-update-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDeviceOtpCreateWithoutWorkshopInput } from './workshop-device-otp-create-without-workshop.input';
import { WorkshopDeviceOtpWhereInput } from './workshop-device-otp-where.input';

@InputType()
export class WorkshopDeviceOtpUpsertWithoutWorkshopInput {

    @Field(() => WorkshopDeviceOtpUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopDeviceOtpUpdateWithoutWorkshopInput)
    @ValidateNested()
    update!: WorkshopDeviceOtpUpdateWithoutWorkshopInput;

    @Field(() => WorkshopDeviceOtpCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopDeviceOtpCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: WorkshopDeviceOtpCreateWithoutWorkshopInput;

    @Field(() => WorkshopDeviceOtpWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpWhereInput)
    where?: WorkshopDeviceOtpWhereInput;
}
