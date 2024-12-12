import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOTPWhereInput } from '../../workshop-device-otp/dto/workshop-device-otp-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWorkshopDeviceOtpArgs {

    @Field(() => WorkshopDeviceOTPWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPWhereInput)
    where?: WorkshopDeviceOTPWhereInput;
}
