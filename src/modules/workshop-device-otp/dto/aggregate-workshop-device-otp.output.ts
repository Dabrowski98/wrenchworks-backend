import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkshopDeviceOtpCountAggregate } from './workshop-device-otp-count-aggregate.output';
import { WorkshopDeviceOtpAvgAggregate } from './workshop-device-otp-avg-aggregate.output';
import { WorkshopDeviceOtpSumAggregate } from './workshop-device-otp-sum-aggregate.output';
import { WorkshopDeviceOtpMinAggregate } from './workshop-device-otp-min-aggregate.output';
import { WorkshopDeviceOtpMaxAggregate } from './workshop-device-otp-max-aggregate.output';

@ObjectType()
export class AggregateWorkshopDeviceOtp {

    @Field(() => WorkshopDeviceOtpCountAggregate, {nullable:true})
    _count?: WorkshopDeviceOtpCountAggregate;

    @Field(() => WorkshopDeviceOtpAvgAggregate, {nullable:true})
    _avg?: WorkshopDeviceOtpAvgAggregate;

    @Field(() => WorkshopDeviceOtpSumAggregate, {nullable:true})
    _sum?: WorkshopDeviceOtpSumAggregate;

    @Field(() => WorkshopDeviceOtpMinAggregate, {nullable:true})
    _min?: WorkshopDeviceOtpMinAggregate;

    @Field(() => WorkshopDeviceOtpMaxAggregate, {nullable:true})
    _max?: WorkshopDeviceOtpMaxAggregate;
}
