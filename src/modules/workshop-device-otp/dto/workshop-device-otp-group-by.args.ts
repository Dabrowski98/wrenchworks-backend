import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceOtpWhereInput } from './workshop-device-otp-where.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceOtpOrderByWithAggregationInput } from './workshop-device-otp-order-by-with-aggregation.input';
import { WorkshopDeviceOtpScalarFieldEnum } from './workshop-device-otp-scalar-field.enum';
import { WorkshopDeviceOtpScalarWhereWithAggregatesInput } from './workshop-device-otp-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WorkshopDeviceOtpCountAggregateInput } from './workshop-device-otp-count-aggregate.input';
import { WorkshopDeviceOtpAvgAggregateInput } from './workshop-device-otp-avg-aggregate.input';
import { WorkshopDeviceOtpSumAggregateInput } from './workshop-device-otp-sum-aggregate.input';
import { WorkshopDeviceOtpMinAggregateInput } from './workshop-device-otp-min-aggregate.input';
import { WorkshopDeviceOtpMaxAggregateInput } from './workshop-device-otp-max-aggregate.input';

@ArgsType()
export class WorkshopDeviceOtpGroupByArgs {

    @Field(() => WorkshopDeviceOtpWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceOtpWhereInput)
    where?: WorkshopDeviceOtpWhereInput;

    @Field(() => [WorkshopDeviceOtpOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WorkshopDeviceOtpOrderByWithAggregationInput>;

    @Field(() => [WorkshopDeviceOtpScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WorkshopDeviceOtpScalarFieldEnum>;

    @Field(() => WorkshopDeviceOtpScalarWhereWithAggregatesInput, {nullable:true})
    having?: WorkshopDeviceOtpScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WorkshopDeviceOtpCountAggregateInput, {nullable:true})
    _count?: WorkshopDeviceOtpCountAggregateInput;

    @Field(() => WorkshopDeviceOtpAvgAggregateInput, {nullable:true})
    _avg?: WorkshopDeviceOtpAvgAggregateInput;

    @Field(() => WorkshopDeviceOtpSumAggregateInput, {nullable:true})
    _sum?: WorkshopDeviceOtpSumAggregateInput;

    @Field(() => WorkshopDeviceOtpMinAggregateInput, {nullable:true})
    _min?: WorkshopDeviceOtpMinAggregateInput;

    @Field(() => WorkshopDeviceOtpMaxAggregateInput, {nullable:true})
    _max?: WorkshopDeviceOtpMaxAggregateInput;
}
