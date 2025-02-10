import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { WorkshopDeviceOtpCountOrderByAggregateInput } from './workshop-device-otp-count-order-by-aggregate.input';
import { WorkshopDeviceOtpAvgOrderByAggregateInput } from './workshop-device-otp-avg-order-by-aggregate.input';
import { WorkshopDeviceOtpMaxOrderByAggregateInput } from './workshop-device-otp-max-order-by-aggregate.input';
import { WorkshopDeviceOtpMinOrderByAggregateInput } from './workshop-device-otp-min-order-by-aggregate.input';
import { WorkshopDeviceOtpSumOrderByAggregateInput } from './workshop-device-otp-sum-order-by-aggregate.input';

@InputType()
export class WorkshopDeviceOtpOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    WorkshopDeviceOtpId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @Field(() => WorkshopDeviceOtpCountOrderByAggregateInput, {nullable:true})
    _count?: WorkshopDeviceOtpCountOrderByAggregateInput;

    @Field(() => WorkshopDeviceOtpAvgOrderByAggregateInput, {nullable:true})
    _avg?: WorkshopDeviceOtpAvgOrderByAggregateInput;

    @Field(() => WorkshopDeviceOtpMaxOrderByAggregateInput, {nullable:true})
    _max?: WorkshopDeviceOtpMaxOrderByAggregateInput;

    @Field(() => WorkshopDeviceOtpMinOrderByAggregateInput, {nullable:true})
    _min?: WorkshopDeviceOtpMinOrderByAggregateInput;

    @Field(() => WorkshopDeviceOtpSumOrderByAggregateInput, {nullable:true})
    _sum?: WorkshopDeviceOtpSumOrderByAggregateInput;
}
