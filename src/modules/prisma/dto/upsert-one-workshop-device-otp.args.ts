import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOTPWhereUniqueInput } from '../../workshop-device-otp/dto/workshop-device-otp-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceOTPCreateInput } from '../../workshop-device-otp/dto/workshop-device-otp-create.input';
import { WorkshopDeviceOTPUpdateInput } from '../../workshop-device-otp/dto/workshop-device-otp-update.input';

@ArgsType()
export class UpsertOneWorkshopDeviceOtpArgs {

    @Field(() => WorkshopDeviceOTPWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDeviceOTPWhereUniqueInput)
    where!: WorkshopDeviceOTPWhereUniqueInput;

    @Field(() => WorkshopDeviceOTPCreateInput, {nullable:false})
    @Type(() => WorkshopDeviceOTPCreateInput)
    create!: WorkshopDeviceOTPCreateInput;

    @Field(() => WorkshopDeviceOTPUpdateInput, {nullable:false})
    @Type(() => WorkshopDeviceOTPUpdateInput)
    update!: WorkshopDeviceOTPUpdateInput;
}
