import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutWorkshopDeviceOTPInput } from './workshop-update-without-workshop-device-otp.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateWithoutWorkshopDeviceOTPInput } from './workshop-create-without-workshop-device-otp.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutWorkshopDeviceOTPInput {

    @Field(() => WorkshopUpdateWithoutWorkshopDeviceOTPInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopDeviceOTPInput)
    @ValidateNested()
    update!: WorkshopUpdateWithoutWorkshopDeviceOTPInput;

    @Field(() => WorkshopCreateWithoutWorkshopDeviceOTPInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutWorkshopDeviceOTPInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutWorkshopDeviceOTPInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
