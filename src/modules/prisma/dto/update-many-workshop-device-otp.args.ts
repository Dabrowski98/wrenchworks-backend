import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOTPUpdateManyMutationInput } from '../../workshop-device-otp/dto/workshop-device-otp-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDeviceOTPWhereInput } from '../../workshop-device-otp/dto/workshop-device-otp-where.input';

@ArgsType()
export class UpdateManyWorkshopDeviceOtpArgs {

    @Field(() => WorkshopDeviceOTPUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkshopDeviceOTPUpdateManyMutationInput)
    @ValidateNested()
    data!: WorkshopDeviceOTPUpdateManyMutationInput;

    @Field(() => WorkshopDeviceOTPWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPWhereInput)
    where?: WorkshopDeviceOTPWhereInput;
}
