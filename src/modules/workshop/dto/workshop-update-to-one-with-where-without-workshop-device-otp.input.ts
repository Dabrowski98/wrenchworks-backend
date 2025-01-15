import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutWorkshopDeviceOtpInput } from './workshop-update-without-workshop-device-otp.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutWorkshopDeviceOtpInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutWorkshopDeviceOtpInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopDeviceOtpInput)
    data!: WorkshopUpdateWithoutWorkshopDeviceOtpInput;
}
