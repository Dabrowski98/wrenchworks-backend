import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceOTPWhereInput } from './workshop-device-otp-where.input';

@InputType()
export class WorkshopDeviceOTPNullableRelationFilter {

    @Field(() => WorkshopDeviceOTPWhereInput, {nullable:true})
    is?: WorkshopDeviceOTPWhereInput;

    @Field(() => WorkshopDeviceOTPWhereInput, {nullable:true})
    isNot?: WorkshopDeviceOTPWhereInput;
}
