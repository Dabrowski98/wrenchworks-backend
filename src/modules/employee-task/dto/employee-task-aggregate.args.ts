import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeTaskWhereInput } from './employee-task-where.input';
import { Type } from 'class-transformer';
import { EmployeeTaskOrderByWithRelationInput } from './employee-task-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EmployeeTaskWhereUniqueInput } from './employee-task-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmployeeTaskCountAggregateInput } from './employee-task-count-aggregate.input';
import { EmployeeTaskAvgAggregateInput } from './employee-task-avg-aggregate.input';
import { EmployeeTaskSumAggregateInput } from './employee-task-sum-aggregate.input';
import { EmployeeTaskMinAggregateInput } from './employee-task-min-aggregate.input';
import { EmployeeTaskMaxAggregateInput } from './employee-task-max-aggregate.input';

@ArgsType()
export class EmployeeTaskAggregateArgs {

    @Field(() => EmployeeTaskWhereInput, {nullable:true})
    @Type(() => EmployeeTaskWhereInput)
    where?: EmployeeTaskWhereInput;

    @Field(() => [EmployeeTaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployeeTaskOrderByWithRelationInput>;

    @Field(() => EmployeeTaskWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EmployeeTaskWhereUniqueInput, 'employeeId_taskId_workshopId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EmployeeTaskCountAggregateInput, {nullable:true})
    _count?: EmployeeTaskCountAggregateInput;

    @Field(() => EmployeeTaskAvgAggregateInput, {nullable:true})
    _avg?: EmployeeTaskAvgAggregateInput;

    @Field(() => EmployeeTaskSumAggregateInput, {nullable:true})
    _sum?: EmployeeTaskSumAggregateInput;

    @Field(() => EmployeeTaskMinAggregateInput, {nullable:true})
    _min?: EmployeeTaskMinAggregateInput;

    @Field(() => EmployeeTaskMaxAggregateInput, {nullable:true})
    _max?: EmployeeTaskMaxAggregateInput;
}
