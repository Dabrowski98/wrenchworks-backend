import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumTasksStatusNullableFilter } from '../prisma/enum-tasks-status-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { ServiceRelationFilter } from '../service/service-relation-filter.input';
import { EmployeeTaskListRelationFilter } from '../employee-task/employee-task-list-relation-filter.input';

@InputType()
export class TaskWhereInput {

    @Field(() => [TaskWhereInput], {nullable:true})
    @Type(() => TaskWhereInput)
    AND?: Array<TaskWhereInput>;

    @Field(() => [TaskWhereInput], {nullable:true})
    @Type(() => TaskWhereInput)
    OR?: Array<TaskWhereInput>;

    @Field(() => [TaskWhereInput], {nullable:true})
    @Type(() => TaskWhereInput)
    NOT?: Array<TaskWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    taskId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    serviceId?: BigIntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    jobId?: BigIntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    customName?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumTasksStatusNullableFilter, {nullable:true})
    status?: EnumTasksStatusNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    executionTime?: FloatFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    partsCost?: DecimalFilter;

    @Field(() => ServiceRelationFilter, {nullable:true})
    @Type(() => ServiceRelationFilter)
    service?: ServiceRelationFilter;

    @Field(() => EmployeeTaskListRelationFilter, {nullable:true})
    @Type(() => EmployeeTaskListRelationFilter)
    taskEmployees?: EmployeeTaskListRelationFilter;
}
