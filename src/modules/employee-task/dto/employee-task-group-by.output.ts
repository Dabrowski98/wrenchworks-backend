import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { EmployeeTaskCountAggregate } from './employee-task-count-aggregate.output';
import { EmployeeTaskAvgAggregate } from './employee-task-avg-aggregate.output';
import { EmployeeTaskSumAggregate } from './employee-task-sum-aggregate.output';
import { EmployeeTaskMinAggregate } from './employee-task-min-aggregate.output';
import { EmployeeTaskMaxAggregate } from './employee-task-max-aggregate.output';

@ObjectType()
export class EmployeeTaskGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    taskId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    employeeId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => EmployeeTaskCountAggregate, {nullable:true})
    _count?: EmployeeTaskCountAggregate;

    @Field(() => EmployeeTaskAvgAggregate, {nullable:true})
    _avg?: EmployeeTaskAvgAggregate;

    @Field(() => EmployeeTaskSumAggregate, {nullable:true})
    _sum?: EmployeeTaskSumAggregate;

    @Field(() => EmployeeTaskMinAggregate, {nullable:true})
    _min?: EmployeeTaskMinAggregate;

    @Field(() => EmployeeTaskMaxAggregate, {nullable:true})
    _max?: EmployeeTaskMaxAggregate;
}
