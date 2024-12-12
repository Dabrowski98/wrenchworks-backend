import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOTPCreateManyInput } from '../../workshop-device-otp/dto/workshop-device-otp-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyWorkshopDeviceOtpArgs {

    @Field(() => [WorkshopDeviceOTPCreateManyInput], {nullable:false})
    @Type(() => WorkshopDeviceOTPCreateManyInput)
    @ValidateNested()
    data!: Array<WorkshopDeviceOTPCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
