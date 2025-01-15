import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceOtpWhereInput } from './workshop-device-otp-where.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceOtpUpdateWithoutWorkshopInput } from './workshop-device-otp-update-without-workshop.input';

@InputType()
export class WorkshopDeviceOtpUpdateToOneWithWhereWithoutWorkshopInput {

    @Field(() => WorkshopDeviceOtpWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpWhereInput)
    where?: WorkshopDeviceOtpWhereInput;

    @Field(() => WorkshopDeviceOtpUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopDeviceOtpUpdateWithoutWorkshopInput)
    data!: WorkshopDeviceOtpUpdateWithoutWorkshopInput;
}
