import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { WorkshopDeviceOtpCountAggregate } from './workshop-device-otp-count-aggregate.output';
import { WorkshopDeviceOtpAvgAggregate } from './workshop-device-otp-avg-aggregate.output';
import { WorkshopDeviceOtpSumAggregate } from './workshop-device-otp-sum-aggregate.output';
import { WorkshopDeviceOtpMinAggregate } from './workshop-device-otp-min-aggregate.output';
import { WorkshopDeviceOtpMaxAggregate } from './workshop-device-otp-max-aggregate.output';

@ObjectType()
export class WorkshopDeviceOtpGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    WorkshopDeviceOtpId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    employeeId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

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
