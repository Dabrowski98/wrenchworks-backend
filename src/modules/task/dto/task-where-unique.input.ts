import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { TaskWhereInput } from './task-where.input';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { EnumTasksStatusNullableFilter } from '../../prisma/dto/enum-tasks-status-nullable-filter.input';
import { FloatFilter } from '../../prisma/dto/float-filter.input';
import { DecimalFilter } from '../../prisma/dto/decimal-filter.input';
import { ServiceRelationFilter } from '../../service/dto/service-relation-filter.input';
import { EmployeeTaskListRelationFilter } from '../../employee-task/dto/employee-task-list-relation-filter.input';

@InputType()
export class TaskWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    taskId?: bigint | number;

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
