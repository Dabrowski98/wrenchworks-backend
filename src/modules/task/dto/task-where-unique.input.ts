import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { TaskWhereInput } from './task-where.input';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { EnumTaskStatusNullableFilter } from '../../prisma/dto/enum-task-status-nullable-filter.input';
import { FloatFilter } from '../../prisma/dto/float-filter.input';
import { DecimalFilter } from '../../prisma/dto/decimal-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { WorkshopJobRelationFilter } from '../../workshop-job/dto/workshop-job-relation-filter.input';
import { ValidateNested } from 'class-validator';
import { ServiceRelationFilter } from '../../service/dto/service-relation-filter.input';
import { EmployeeListRelationFilter } from '../../employee/dto/employee-list-relation-filter.input';

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

    @Field(() => BigIntFilter, {nullable:true})
    workshopJobId?: BigIntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    customName?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumTaskStatusNullableFilter, {nullable:true})
    status?: EnumTaskStatusNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    executionTime?: FloatFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    partsCost?: DecimalFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    createdBy?: BigIntNullableFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    updatedBy?: BigIntNullableFilter;

    @HideField()
    resolvedAt?: DateTimeNullableFilter;

    @HideField()
    resolvedBy?: BigIntNullableFilter;

    @Field(() => WorkshopJobRelationFilter, {nullable:true})
    @Type(() => WorkshopJobRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopJobRelationFilter)
    workshopJob?: WorkshopJobRelationFilter;

    @Field(() => ServiceRelationFilter, {nullable:true})
    @Type(() => ServiceRelationFilter)
    @ValidateNested()
    @Type(() => ServiceRelationFilter)
    service?: ServiceRelationFilter;

    @Field(() => EmployeeListRelationFilter, {nullable:true})
    @Type(() => EmployeeListRelationFilter)
    @ValidateNested()
    @Type(() => EmployeeListRelationFilter)
    employees?: EmployeeListRelationFilter;
}
