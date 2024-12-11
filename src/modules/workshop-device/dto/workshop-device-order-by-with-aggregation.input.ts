import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { WorkshopDeviceCountOrderByAggregateInput } from './workshop-device-count-order-by-aggregate.input';
import { WorkshopDeviceAvgOrderByAggregateInput } from './workshop-device-avg-order-by-aggregate.input';
import { WorkshopDeviceMaxOrderByAggregateInput } from './workshop-device-max-order-by-aggregate.input';
import { WorkshopDeviceMinOrderByAggregateInput } from './workshop-device-min-order-by-aggregate.input';
import { WorkshopDeviceSumOrderByAggregateInput } from './workshop-device-sum-order-by-aggregate.input';

@InputType()
export class WorkshopDeviceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    workshopDeviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serialNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceName?: keyof typeof SortOrder;

    @Field(() => WorkshopDeviceCountOrderByAggregateInput, {nullable:true})
    _count?: WorkshopDeviceCountOrderByAggregateInput;

    @Field(() => WorkshopDeviceAvgOrderByAggregateInput, {nullable:true})
    _avg?: WorkshopDeviceAvgOrderByAggregateInput;

    @Field(() => WorkshopDeviceMaxOrderByAggregateInput, {nullable:true})
    _max?: WorkshopDeviceMaxOrderByAggregateInput;

    @Field(() => WorkshopDeviceMinOrderByAggregateInput, {nullable:true})
    _min?: WorkshopDeviceMinOrderByAggregateInput;

    @Field(() => WorkshopDeviceSumOrderByAggregateInput, {nullable:true})
    _sum?: WorkshopDeviceSumOrderByAggregateInput;
}