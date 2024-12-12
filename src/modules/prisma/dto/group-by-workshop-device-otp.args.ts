import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOTPWhereInput } from '../../workshop-device-otp/dto/workshop-device-otp-where.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceOTPOrderByWithAggregationInput } from '../../workshop-device-otp/dto/workshop-device-otp-order-by-with-aggregation.input';
import { WorkshopDeviceOTPScalarFieldEnum } from '../../workshop-device-otp/dto/workshop-device-otp-scalar-field.enum';
import { WorkshopDeviceOTPScalarWhereWithAggregatesInput } from '../../workshop-device-otp/dto/workshop-device-otp-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByWorkshopDeviceOtpArgs {

    @Field(() => WorkshopDeviceOTPWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOTPWhereInput)
    where?: WorkshopDeviceOTPWhereInput;

    @Field(() => [WorkshopDeviceOTPOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WorkshopDeviceOTPOrderByWithAggregationInput>;

    @Field(() => [WorkshopDeviceOTPScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WorkshopDeviceOTPScalarFieldEnum>;

    @Field(() => WorkshopDeviceOTPScalarWhereWithAggregatesInput, {nullable:true})
    having?: WorkshopDeviceOTPScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
