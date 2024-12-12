import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOTPCreateInput } from '../../workshop-device-otp/dto/workshop-device-otp-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneWorkshopDeviceOtpArgs {

    @Field(() => WorkshopDeviceOTPCreateInput, {nullable:false})
    @Type(() => WorkshopDeviceOTPCreateInput)
    @ValidateNested()
    data!: WorkshopDeviceOTPCreateInput;
}
