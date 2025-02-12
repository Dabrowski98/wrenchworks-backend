import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { EmployeePermissionCountOrderByAggregateInput } from './employee-permission-count-order-by-aggregate.input';
import { EmployeePermissionAvgOrderByAggregateInput } from './employee-permission-avg-order-by-aggregate.input';
import { EmployeePermissionMaxOrderByAggregateInput } from './employee-permission-max-order-by-aggregate.input';
import { EmployeePermissionMinOrderByAggregateInput } from './employee-permission-min-order-by-aggregate.input';
import { EmployeePermissionSumOrderByAggregateInput } from './employee-permission-sum-order-by-aggregate.input';

@InputType()
export class EmployeePermissionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    permissionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subject?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    conditions?: SortOrderInput;

    @Field(() => EmployeePermissionCountOrderByAggregateInput, {nullable:true})
    _count?: EmployeePermissionCountOrderByAggregateInput;

    @Field(() => EmployeePermissionAvgOrderByAggregateInput, {nullable:true})
    _avg?: EmployeePermissionAvgOrderByAggregateInput;

    @Field(() => EmployeePermissionMaxOrderByAggregateInput, {nullable:true})
    _max?: EmployeePermissionMaxOrderByAggregateInput;

    @Field(() => EmployeePermissionMinOrderByAggregateInput, {nullable:true})
    _min?: EmployeePermissionMinOrderByAggregateInput;

    @Field(() => EmployeePermissionSumOrderByAggregateInput, {nullable:true})
    _sum?: EmployeePermissionSumOrderByAggregateInput;
}