import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserReportCountOrderByAggregateInput } from './user-report-count-order-by-aggregate.input';
import { UserReportAvgOrderByAggregateInput } from './user-report-avg-order-by-aggregate.input';
import { UserReportMaxOrderByAggregateInput } from './user-report-max-order-by-aggregate.input';
import { UserReportMinOrderByAggregateInput } from './user-report-min-order-by-aggregate.input';
import { UserReportSumOrderByAggregateInput } from './user-report-sum-order-by-aggregate.input';

@InputType()
export class UserReportOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    reportId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reportText?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reportedType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reportedId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => UserReportCountOrderByAggregateInput, {nullable:true})
    _count?: UserReportCountOrderByAggregateInput;

    @Field(() => UserReportAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserReportAvgOrderByAggregateInput;

    @Field(() => UserReportMaxOrderByAggregateInput, {nullable:true})
    _max?: UserReportMaxOrderByAggregateInput;

    @Field(() => UserReportMinOrderByAggregateInput, {nullable:true})
    _min?: UserReportMinOrderByAggregateInput;

    @Field(() => UserReportSumOrderByAggregateInput, {nullable:true})
    _sum?: UserReportSumOrderByAggregateInput;
}