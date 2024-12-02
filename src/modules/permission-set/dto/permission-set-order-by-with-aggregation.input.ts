import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { PermissionSetCountOrderByAggregateInput } from './permission-set-count-order-by-aggregate.input';
import { PermissionSetAvgOrderByAggregateInput } from './permission-set-avg-order-by-aggregate.input';
import { PermissionSetMaxOrderByAggregateInput } from './permission-set-max-order-by-aggregate.input';
import { PermissionSetMinOrderByAggregateInput } from './permission-set-min-order-by-aggregate.input';
import { PermissionSetSumOrderByAggregateInput } from './permission-set-sum-order-by-aggregate.input';

@InputType()
export class PermissionSetOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    permissionSetId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    workshopId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    setName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canReadWorkshopDetails?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canUpdateWorkshopDetails?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canModifyWorkshopDetails?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canReadEmployees?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canUpdateEmployees?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canModifyEmployees?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canReadCustomers?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canUpdateCustomers?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canModifyCustomers?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canReadServices?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canUpdateServices?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canModifyServices?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canReadTasks?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canUpdateTasks?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canModifyTasks?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canReadReports?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canGenerateReports?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canModifyPermissions?: keyof typeof SortOrder;

    @Field(() => PermissionSetCountOrderByAggregateInput, {nullable:true})
    _count?: PermissionSetCountOrderByAggregateInput;

    @Field(() => PermissionSetAvgOrderByAggregateInput, {nullable:true})
    _avg?: PermissionSetAvgOrderByAggregateInput;

    @Field(() => PermissionSetMaxOrderByAggregateInput, {nullable:true})
    _max?: PermissionSetMaxOrderByAggregateInput;

    @Field(() => PermissionSetMinOrderByAggregateInput, {nullable:true})
    _min?: PermissionSetMinOrderByAggregateInput;

    @Field(() => PermissionSetSumOrderByAggregateInput, {nullable:true})
    _sum?: PermissionSetSumOrderByAggregateInput;
}