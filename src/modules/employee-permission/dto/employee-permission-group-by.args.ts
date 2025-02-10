import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeePermissionWhereInput } from './employee-permission-where.input';
import { Type } from 'class-transformer';
import { EmployeePermissionOrderByWithAggregationInput } from './employee-permission-order-by-with-aggregation.input';
import { EmployeePermissionScalarFieldEnum } from './employee-permission-scalar-field.enum';
import { EmployeePermissionScalarWhereWithAggregatesInput } from './employee-permission-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EmployeePermissionCountAggregateInput } from './employee-permission-count-aggregate.input';
import { EmployeePermissionAvgAggregateInput } from './employee-permission-avg-aggregate.input';
import { EmployeePermissionSumAggregateInput } from './employee-permission-sum-aggregate.input';
import { EmployeePermissionMinAggregateInput } from './employee-permission-min-aggregate.input';
import { EmployeePermissionMaxAggregateInput } from './employee-permission-max-aggregate.input';

@ArgsType()
export class EmployeePermissionGroupByArgs {

    @Field(() => EmployeePermissionWhereInput, {nullable:true})
    @Type(() => EmployeePermissionWhereInput)
    where?: EmployeePermissionWhereInput;

    @Field(() => [EmployeePermissionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EmployeePermissionOrderByWithAggregationInput>;

    @Field(() => [EmployeePermissionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EmployeePermissionScalarFieldEnum>;

    @Field(() => EmployeePermissionScalarWhereWithAggregatesInput, {nullable:true})
    having?: EmployeePermissionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EmployeePermissionCountAggregateInput, {nullable:true})
    _count?: EmployeePermissionCountAggregateInput;

    @Field(() => EmployeePermissionAvgAggregateInput, {nullable:true})
    _avg?: EmployeePermissionAvgAggregateInput;

    @Field(() => EmployeePermissionSumAggregateInput, {nullable:true})
    _sum?: EmployeePermissionSumAggregateInput;

    @Field(() => EmployeePermissionMinAggregateInput, {nullable:true})
    _min?: EmployeePermissionMinAggregateInput;

    @Field(() => EmployeePermissionMaxAggregateInput, {nullable:true})
    _max?: EmployeePermissionMaxAggregateInput;
}
