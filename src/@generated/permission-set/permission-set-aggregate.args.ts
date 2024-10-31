import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionSetWhereInput } from './permission-set-where.input';
import { Type } from 'class-transformer';
import { PermissionSetOrderByWithRelationInput } from './permission-set-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermissionSetCountAggregateInput } from './permission-set-count-aggregate.input';
import { PermissionSetAvgAggregateInput } from './permission-set-avg-aggregate.input';
import { PermissionSetSumAggregateInput } from './permission-set-sum-aggregate.input';
import { PermissionSetMinAggregateInput } from './permission-set-min-aggregate.input';
import { PermissionSetMaxAggregateInput } from './permission-set-max-aggregate.input';

@ArgsType()
export class PermissionSetAggregateArgs {

    @Field(() => PermissionSetWhereInput, {nullable:true})
    @Type(() => PermissionSetWhereInput)
    where?: PermissionSetWhereInput;

    @Field(() => [PermissionSetOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PermissionSetOrderByWithRelationInput>;

    @Field(() => PermissionSetWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>;

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
