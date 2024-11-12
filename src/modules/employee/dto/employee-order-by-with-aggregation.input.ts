import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { EmployeeCountOrderByAggregateInput } from './employee-count-order-by-aggregate.input';
import { EmployeeAvgOrderByAggregateInput } from './employee-avg-order-by-aggregate.input';
import { EmployeeMaxOrderByAggregateInput } from './employee-max-order-by-aggregate.input';
import { EmployeeMinOrderByAggregateInput } from './employee-min-order-by-aggregate.input';
import { EmployeeSumOrderByAggregateInput } from './employee-sum-order-by-aggregate.input';

@InputType()
export class EmployeeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    joinedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    permissionSetId?: SortOrderInput;

    @Field(() => EmployeeCountOrderByAggregateInput, {nullable:true})
    _count?: EmployeeCountOrderByAggregateInput;

    @Field(() => EmployeeAvgOrderByAggregateInput, {nullable:true})
    _avg?: EmployeeAvgOrderByAggregateInput;

    @Field(() => EmployeeMaxOrderByAggregateInput, {nullable:true})
    _max?: EmployeeMaxOrderByAggregateInput;

    @Field(() => EmployeeMinOrderByAggregateInput, {nullable:true})
    _min?: EmployeeMinOrderByAggregateInput;

    @Field(() => EmployeeSumOrderByAggregateInput, {nullable:true})
    _sum?: EmployeeSumOrderByAggregateInput;
}
