import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOTPWhereUniqueInput } from '../../workshop-device-otp/dto/workshop-device-otp-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneWorkshopDeviceOtpArgs {

    @Field(() => WorkshopDeviceOTPWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDeviceOTPWhereUniqueInput)
    where!: WorkshopDeviceOTPWhereUniqueInput;
}
