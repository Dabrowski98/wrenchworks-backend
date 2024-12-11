import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkshopDeviceCountAggregate } from './workshop-device-count-aggregate.output';
import { WorkshopDeviceAvgAggregate } from './workshop-device-avg-aggregate.output';
import { WorkshopDeviceSumAggregate } from './workshop-device-sum-aggregate.output';
import { WorkshopDeviceMinAggregate } from './workshop-device-min-aggregate.output';
import { WorkshopDeviceMaxAggregate } from './workshop-device-max-aggregate.output';

@ObjectType()
export class AggregateWorkshopDevice {

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
