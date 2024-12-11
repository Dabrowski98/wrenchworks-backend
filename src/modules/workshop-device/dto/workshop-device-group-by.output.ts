import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { WorkshopDeviceCountAggregate } from './workshop-device-count-aggregate.output';
import { WorkshopDeviceAvgAggregate } from './workshop-device-avg-aggregate.output';
import { WorkshopDeviceSumAggregate } from './workshop-device-sum-aggregate.output';
import { WorkshopDeviceMinAggregate } from './workshop-device-min-aggregate.output';
import { WorkshopDeviceMaxAggregate } from './workshop-device-max-aggregate.output';

@ObjectType()
export class WorkshopDeviceGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopDeviceId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => String, {nullable:false})
    serialNumber!: string;

    @Field(() => String, {nullable:false})
    deviceName!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    createdBy!: bigint | number;

    @Field(() => WorkshopDeviceCountAggregate, {nullable:true})
    _count?: WorkshopDeviceCountAggregate;

    @Field(() => WorkshopDeviceAvgAggregate, {nullable:true})
    _avg?: WorkshopDeviceAvgAggregate;

    @Field(() => WorkshopDeviceSumAggregate, {nullable:true})
    _sum?: WorkshopDeviceSumAggregate;

    @Field(() => WorkshopDeviceMinAggregate, {nullable:true})
    _min?: WorkshopDeviceMinAggregate;

    @Field(() => WorkshopDeviceMaxAggregate, {nullable:true})
    _max?: WorkshopDeviceMaxAggregate;
}
