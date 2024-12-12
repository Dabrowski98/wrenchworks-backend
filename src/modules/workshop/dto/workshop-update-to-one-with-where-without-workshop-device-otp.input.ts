import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutWorkshopDeviceOTPInput } from './workshop-update-without-workshop-device-otp.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutWorkshopDeviceOTPInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutWorkshopDeviceOTPInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopDeviceOTPInput)
    data!: WorkshopUpdateWithoutWorkshopDeviceOTPInput;
}
