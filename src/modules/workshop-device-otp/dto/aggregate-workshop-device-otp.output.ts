import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkshopDeviceOTPCountAggregate } from './workshop-device-otp-count-aggregate.output';
import { WorkshopDeviceOTPAvgAggregate } from './workshop-device-otp-avg-aggregate.output';
import { WorkshopDeviceOTPSumAggregate } from './workshop-device-otp-sum-aggregate.output';
import { WorkshopDeviceOTPMinAggregate } from './workshop-device-otp-min-aggregate.output';
import { WorkshopDeviceOTPMaxAggregate } from './workshop-device-otp-max-aggregate.output';

@ObjectType()
export class AggregateWorkshopDeviceOTP {

    @Field(() => WorkshopDeviceOTPCountAggregate, {nullable:true})
    _count?: WorkshopDeviceOTPCountAggregate;

    @Field(() => WorkshopDeviceOTPAvgAggregate, {nullable:true})
    _avg?: WorkshopDeviceOTPAvgAggregate;

    @Field(() => WorkshopDeviceOTPSumAggregate, {nullable:true})
    _sum?: WorkshopDeviceOTPSumAggregate;

    @Field(() => WorkshopDeviceOTPMinAggregate, {nullable:true})
    _min?: WorkshopDeviceOTPMinAggregate;

    @Field(() => WorkshopDeviceOTPMaxAggregate, {nullable:true})
    _max?: WorkshopDeviceOTPMaxAggregate;
}
