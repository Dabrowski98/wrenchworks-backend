import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmployeePermissionCountAggregate } from './employee-permission-count-aggregate.output';
import { EmployeePermissionAvgAggregate } from './employee-permission-avg-aggregate.output';
import { EmployeePermissionSumAggregate } from './employee-permission-sum-aggregate.output';
import { EmployeePermissionMinAggregate } from './employee-permission-min-aggregate.output';
import { EmployeePermissionMaxAggregate } from './employee-permission-max-aggregate.output';

@ObjectType()
export class AggregateEmployeePermission {

    @Field(() => EmployeePermissionCountAggregate, {nullable:true})
    _count?: EmployeePermissionCountAggregate;

    @Field(() => EmployeePermissionAvgAggregate, {nullable:true})
    _avg?: EmployeePermissionAvgAggregate;

    @Field(() => EmployeePermissionSumAggregate, {nullable:true})
    _sum?: EmployeePermissionSumAggregate;

    @Field(() => EmployeePermissionMinAggregate, {nullable:true})
    _min?: EmployeePermissionMinAggregate;

    @Field(() => EmployeePermissionMaxAggregate, {nullable:true})
    _max?: EmployeePermissionMaxAggregate;
}
