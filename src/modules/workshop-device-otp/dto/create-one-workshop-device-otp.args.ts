import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOtpCreateInput } from './workshop-device-otp-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneWorkshopDeviceOtpArgs {

    @Field(() => WorkshopDeviceOtpCreateInput, {nullable:false})
    @Type(() => WorkshopDeviceOtpCreateInput)
    @ValidateNested()
    data!: WorkshopDeviceOtpCreateInput;
}
