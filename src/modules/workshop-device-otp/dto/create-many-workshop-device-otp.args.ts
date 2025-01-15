import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOtpCreateManyInput } from './workshop-device-otp-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyWorkshopDeviceOtpArgs {

    @Field(() => [WorkshopDeviceOtpCreateManyInput], {nullable:false})
    @Type(() => WorkshopDeviceOtpCreateManyInput)
    @ValidateNested()
    data!: Array<WorkshopDeviceOtpCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
