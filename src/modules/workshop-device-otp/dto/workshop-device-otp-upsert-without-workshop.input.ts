import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceOTPUpdateWithoutWorkshopInput } from './workshop-device-otp-update-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDeviceOTPCreateWithoutWorkshopInput } from './workshop-device-otp-create-without-workshop.input';
import { WorkshopDeviceOTPWhereInput } from './workshop-device-otp-where.input';

@InputType()
export class WorkshopDeviceOTPUpsertWithoutWorkshopInput {

    @Field(() => WorkshopDeviceOTPUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopDeviceOTPUpdateWithoutWorkshopInput)
    @ValidateNested()
    update!: WorkshopDeviceOTPUpdateWithoutWorkshopInput;

    @Field(() => WorkshopDeviceOTPCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopDeviceOTPCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: WorkshopDeviceOTPCreateWithoutWorkshopInput;

    @Field(() => WorkshopDeviceOTPWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPWhereInput)
    where?: WorkshopDeviceOTPWhereInput;
}
