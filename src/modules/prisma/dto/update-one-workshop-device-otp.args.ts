import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOTPUpdateInput } from '../../workshop-device-otp/dto/workshop-device-otp-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDeviceOTPWhereUniqueInput } from '../../workshop-device-otp/dto/workshop-device-otp-where-unique.input';

@ArgsType()
export class UpdateOneWorkshopDeviceOtpArgs {

    @Field(() => WorkshopDeviceOTPUpdateInput, {nullable:false})
    @Type(() => WorkshopDeviceOTPUpdateInput)
    @ValidateNested()
    data!: WorkshopDeviceOTPUpdateInput;

    @Field(() => WorkshopDeviceOTPWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDeviceOTPWhereUniqueInput)
    where!: WorkshopDeviceOTPWhereUniqueInput;
}
