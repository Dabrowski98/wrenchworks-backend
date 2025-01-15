import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutWorkshopDeviceOtpInput } from './workshop-update-without-workshop-device-otp.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateWithoutWorkshopDeviceOtpInput } from './workshop-create-without-workshop-device-otp.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutWorkshopDeviceOtpInput {

    @Field(() => WorkshopUpdateWithoutWorkshopDeviceOtpInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopDeviceOtpInput)
    @ValidateNested()
    update!: WorkshopUpdateWithoutWorkshopDeviceOtpInput;

    @Field(() => WorkshopCreateWithoutWorkshopDeviceOtpInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutWorkshopDeviceOtpInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutWorkshopDeviceOtpInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
