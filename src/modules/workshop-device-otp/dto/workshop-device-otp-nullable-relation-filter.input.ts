import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceOtpWhereInput } from './workshop-device-otp-where.input';

@InputType()
export class WorkshopDeviceOtpNullableRelationFilter {

    @Field(() => WorkshopDeviceOtpWhereInput, {nullable:true})
    is?: WorkshopDeviceOtpWhereInput;

    @Field(() => WorkshopDeviceOtpWhereInput, {nullable:true})
    isNot?: WorkshopDeviceOtpWhereInput;
}
