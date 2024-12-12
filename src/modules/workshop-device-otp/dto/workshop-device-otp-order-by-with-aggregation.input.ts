import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { WorkshopDeviceOTPCountOrderByAggregateInput } from './workshop-device-otp-count-order-by-aggregate.input';
import { WorkshopDeviceOTPAvgOrderByAggregateInput } from './workshop-device-otp-avg-order-by-aggregate.input';
import { WorkshopDeviceOTPMaxOrderByAggregateInput } from './workshop-device-otp-max-order-by-aggregate.input';
import { WorkshopDeviceOTPMinOrderByAggregateInput } from './workshop-device-otp-min-order-by-aggregate.input';
import { WorkshopDeviceOTPSumOrderByAggregateInput } from './workshop-device-otp-sum-order-by-aggregate.input';

@InputType()
export class WorkshopDeviceOTPOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    workshopDeviceOTPId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: keyof typeof SortOrder;

    @Field(() => WorkshopDeviceOTPCountOrderByAggregateInput, {nullable:true})
    _count?: WorkshopDeviceOTPCountOrderByAggregateInput;

    @Field(() => WorkshopDeviceOTPAvgOrderByAggregateInput, {nullable:true})
    _avg?: WorkshopDeviceOTPAvgOrderByAggregateInput;

    @Field(() => WorkshopDeviceOTPMaxOrderByAggregateInput, {nullable:true})
    _max?: WorkshopDeviceOTPMaxOrderByAggregateInput;

    @Field(() => WorkshopDeviceOTPMinOrderByAggregateInput, {nullable:true})
    _min?: WorkshopDeviceOTPMinOrderByAggregateInput;

    @Field(() => WorkshopDeviceOTPSumOrderByAggregateInput, {nullable:true})
    _sum?: WorkshopDeviceOTPSumOrderByAggregateInput;
}