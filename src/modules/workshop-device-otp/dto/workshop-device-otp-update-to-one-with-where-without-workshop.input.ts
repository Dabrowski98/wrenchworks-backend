import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceOTPWhereInput } from './workshop-device-otp-where.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceOTPUpdateWithoutWorkshopInput } from './workshop-device-otp-update-without-workshop.input';

@InputType()
export class WorkshopDeviceOTPUpdateToOneWithWhereWithoutWorkshopInput {

    @Field(() => WorkshopDeviceOTPWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPWhereInput)
    where?: WorkshopDeviceOTPWhereInput;

    @Field(() => WorkshopDeviceOTPUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopDeviceOTPUpdateWithoutWorkshopInput)
    data!: WorkshopDeviceOTPUpdateWithoutWorkshopInput;
}
