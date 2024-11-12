import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmployeeTaskCountAggregate } from './employee-task-count-aggregate.output';
import { EmployeeTaskAvgAggregate } from './employee-task-avg-aggregate.output';
import { EmployeeTaskSumAggregate } from './employee-task-sum-aggregate.output';
import { EmployeeTaskMinAggregate } from './employee-task-min-aggregate.output';
import { EmployeeTaskMaxAggregate } from './employee-task-max-aggregate.output';

@ObjectType()
export class AggregateEmployeeTask {

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
