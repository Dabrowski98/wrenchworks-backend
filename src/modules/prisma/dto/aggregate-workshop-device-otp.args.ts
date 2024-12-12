import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOTPWhereInput } from '../../workshop-device-otp/dto/workshop-device-otp-where.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceOTPOrderByWithRelationInput } from '../../workshop-device-otp/dto/workshop-device-otp-order-by-with-relation.input';
import { WorkshopDeviceOTPWhereUniqueInput } from '../../workshop-device-otp/dto/workshop-device-otp-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateWorkshopDeviceOtpArgs {

    @Field(() => WorkshopDeviceOTPWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPWhereInput)
    where?: WorkshopDeviceOTPWhereInput;

    @Field(() => [WorkshopDeviceOTPOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkshopDeviceOTPOrderByWithRelationInput>;

    @Field(() => WorkshopDeviceOTPWhereUniqueInput, {nullable:true})
    cursor?: WorkshopDeviceOTPWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
