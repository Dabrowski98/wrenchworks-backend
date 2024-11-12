import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserReportWhereInput } from './user-report-where.input';
import { Type } from 'class-transformer';
import { UserReportOrderByWithAggregationInput } from './user-report-order-by-with-aggregation.input';
import { UserReportScalarFieldEnum } from './user-report-scalar-field.enum';
import { UserReportScalarWhereWithAggregatesInput } from './user-report-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserReportCountAggregateInput } from './user-report-count-aggregate.input';
import { UserReportAvgAggregateInput } from './user-report-avg-aggregate.input';
import { UserReportSumAggregateInput } from './user-report-sum-aggregate.input';
import { UserReportMinAggregateInput } from './user-report-min-aggregate.input';
import { UserReportMaxAggregateInput } from './user-report-max-aggregate.input';

@ArgsType()
export class UserReportGroupByArgs {

    @Field(() => UserReportWhereInput, {nullable:true})
    @Type(() => UserReportWhereInput)
    where?: UserReportWhereInput;

    @Field(() => [UserReportOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserReportOrderByWithAggregationInput>;

    @Field(() => [UserReportScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserReportScalarFieldEnum>;

    @Field(() => UserReportScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserReportScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserReportCountAggregateInput, {nullable:true})
    _count?: UserReportCountAggregateInput;

    @Field(() => UserReportAvgAggregateInput, {nullable:true})
    _avg?: UserReportAvgAggregateInput;

    @Field(() => UserReportSumAggregateInput, {nullable:true})
    _sum?: UserReportSumAggregateInput;

    @Field(() => UserReportMinAggregateInput, {nullable:true})
    _min?: UserReportMinAggregateInput;

    @Field(() => UserReportMaxAggregateInput, {nullable:true})
    _max?: UserReportMaxAggregateInput;
}
