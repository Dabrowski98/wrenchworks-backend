import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionSetWhereInput } from './permission-set-where.input';
import { Type } from 'class-transformer';
import { PermissionSetOrderByWithAggregationInput } from './permission-set-order-by-with-aggregation.input';
import { PermissionSetScalarFieldEnum } from './permission-set-scalar-field.enum';
import { PermissionSetScalarWhereWithAggregatesInput } from './permission-set-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PermissionSetCountAggregateInput } from './permission-set-count-aggregate.input';
import { PermissionSetAvgAggregateInput } from './permission-set-avg-aggregate.input';
import { PermissionSetSumAggregateInput } from './permission-set-sum-aggregate.input';
import { PermissionSetMinAggregateInput } from './permission-set-min-aggregate.input';
import { PermissionSetMaxAggregateInput } from './permission-set-max-aggregate.input';

@ArgsType()
export class PermissionSetGroupByArgs {

    @Field(() => PermissionSetWhereInput, {nullable:true})
    @Type(() => PermissionSetWhereInput)
    where?: PermissionSetWhereInput;

    @Field(() => [PermissionSetOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PermissionSetOrderByWithAggregationInput>;

    @Field(() => [PermissionSetScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PermissionSetScalarFieldEnum>;

    @Field(() => PermissionSetScalarWhereWithAggregatesInput, {nullable:true})
    having?: PermissionSetScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PermissionSetCountAggregateInput, {nullable:true})
    _count?: PermissionSetCountAggregateInput;

    @Field(() => PermissionSetAvgAggregateInput, {nullable:true})
    _avg?: PermissionSetAvgAggregateInput;

    @Field(() => PermissionSetSumAggregateInput, {nullable:true})
    _sum?: PermissionSetSumAggregateInput;

    @Field(() => PermissionSetMinAggregateInput, {nullable:true})
    _min?: PermissionSetMinAggregateInput;

    @Field(() => PermissionSetMaxAggregateInput, {nullable:true})
    _max?: PermissionSetMaxAggregateInput;
}
