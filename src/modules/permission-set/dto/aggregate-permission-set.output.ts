import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PermissionSetCountAggregate } from './permission-set-count-aggregate.output';
import { PermissionSetAvgAggregate } from './permission-set-avg-aggregate.output';
import { PermissionSetSumAggregate } from './permission-set-sum-aggregate.output';
import { PermissionSetMinAggregate } from './permission-set-min-aggregate.output';
import { PermissionSetMaxAggregate } from './permission-set-max-aggregate.output';

@ObjectType()
export class AggregatePermissionSet {

    @Field(() => PermissionSetCountAggregate, {nullable:true})
    _count?: PermissionSetCountAggregate;

    @Field(() => PermissionSetAvgAggregate, {nullable:true})
    _avg?: PermissionSetAvgAggregate;

    @Field(() => PermissionSetSumAggregate, {nullable:true})
    _sum?: PermissionSetSumAggregate;

    @Field(() => PermissionSetMinAggregate, {nullable:true})
    _min?: PermissionSetMinAggregate;

    @Field(() => PermissionSetMaxAggregate, {nullable:true})
    _max?: PermissionSetMaxAggregate;
}
