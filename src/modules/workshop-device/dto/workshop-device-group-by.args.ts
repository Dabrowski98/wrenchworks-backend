import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDeviceWhereInput } from './workshop-device-where.input';
import { Type } from 'class-transformer';
import { WorkshopDeviceOrderByWithAggregationInput } from './workshop-device-order-by-with-aggregation.input';
import { WorkshopDeviceScalarFieldEnum } from './workshop-device-scalar-field.enum';
import { WorkshopDeviceScalarWhereWithAggregatesInput } from './workshop-device-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WorkshopDeviceCountAggregateInput } from './workshop-device-count-aggregate.input';
import { WorkshopDeviceAvgAggregateInput } from './workshop-device-avg-aggregate.input';
import { WorkshopDeviceSumAggregateInput } from './workshop-device-sum-aggregate.input';
import { WorkshopDeviceMinAggregateInput } from './workshop-device-min-aggregate.input';
import { WorkshopDeviceMaxAggregateInput } from './workshop-device-max-aggregate.input';

@ArgsType()
export class WorkshopDeviceGroupByArgs {

    @Field(() => WorkshopDeviceWhereInput, {nullable:true})
    @Type(() => WorkshopDeviceWhereInput)
    where?: WorkshopDeviceWhereInput;

    @Field(() => [WorkshopDeviceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WorkshopDeviceOrderByWithAggregationInput>;

    @Field(() => [WorkshopDeviceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WorkshopDeviceScalarFieldEnum>;

    @Field(() => WorkshopDeviceScalarWhereWithAggregatesInput, {nullable:true})
    having?: WorkshopDeviceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WorkshopDeviceCountAggregateInput, {nullable:true})
    _count?: WorkshopDeviceCountAggregateInput;

    @Field(() => WorkshopDeviceAvgAggregateInput, {nullable:true})
    _avg?: WorkshopDeviceAvgAggregateInput;

    @Field(() => WorkshopDeviceSumAggregateInput, {nullable:true})
    _sum?: WorkshopDeviceSumAggregateInput;

    @Field(() => WorkshopDeviceMinAggregateInput, {nullable:true})
    _min?: WorkshopDeviceMinAggregateInput;

    @Field(() => WorkshopDeviceMaxAggregateInput, {nullable:true})
    _max?: WorkshopDeviceMaxAggregateInput;
}
