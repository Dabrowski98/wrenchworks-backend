import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOtpWhereInput } from './workshop-device-otp-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWorkshopDeviceOtpArgs {

    @Field(() => WorkshopDeviceOtpWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpWhereInput)
    where?: WorkshopDeviceOtpWhereInput;
}
