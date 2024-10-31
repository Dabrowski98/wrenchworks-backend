import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EmployeeTaskCountOrderByAggregateInput } from './employee-task-count-order-by-aggregate.input';
import { EmployeeTaskAvgOrderByAggregateInput } from './employee-task-avg-order-by-aggregate.input';
import { EmployeeTaskMaxOrderByAggregateInput } from './employee-task-max-order-by-aggregate.input';
import { EmployeeTaskMinOrderByAggregateInput } from './employee-task-min-order-by-aggregate.input';
import { EmployeeTaskSumOrderByAggregateInput } from './employee-task-sum-order-by-aggregate.input';

@InputType()
export class EmployeeTaskOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => EmployeeTaskCountOrderByAggregateInput, {nullable:true})
    _count?: EmployeeTaskCountOrderByAggregateInput;

    @Field(() => EmployeeTaskAvgOrderByAggregateInput, {nullable:true})
    _avg?: EmployeeTaskAvgOrderByAggregateInput;

    @Field(() => EmployeeTaskMaxOrderByAggregateInput, {nullable:true})
    _max?: EmployeeTaskMaxOrderByAggregateInput;

    @Field(() => EmployeeTaskMinOrderByAggregateInput, {nullable:true})
    _min?: EmployeeTaskMinOrderByAggregateInput;

    @Field(() => EmployeeTaskSumOrderByAggregateInput, {nullable:true})
    _sum?: EmployeeTaskSumOrderByAggregateInput;
}
