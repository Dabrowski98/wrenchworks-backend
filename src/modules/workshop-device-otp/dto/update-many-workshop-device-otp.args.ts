import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOtpUpdateManyMutationInput } from './workshop-device-otp-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDeviceOtpWhereInput } from './workshop-device-otp-where.input';

@ArgsType()
export class UpdateManyWorkshopDeviceOtpArgs {

    @Field(() => WorkshopDeviceOtpUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkshopDeviceOtpUpdateManyMutationInput)
    @ValidateNested()
    data!: WorkshopDeviceOtpUpdateManyMutationInput;

    @Field(() => WorkshopDeviceOtpWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpWhereInput)
    where?: WorkshopDeviceOtpWhereInput;
}
