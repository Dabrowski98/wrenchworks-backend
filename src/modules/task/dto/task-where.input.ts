import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { EnumTasksStatusNullableFilter } from '../../prisma/dto/enum-tasks-status-nullable-filter.input';
import { FloatFilter } from '../../prisma/dto/float-filter.input';
import { DecimalFilter } from '../../prisma/dto/decimal-filter.input';
import { WorkshopJobRelationFilter } from '../../workshop-job/dto/workshop-job-relation-filter.input';
import { ServiceRelationFilter } from '../../service/dto/service-relation-filter.input';
import { EmployeeTaskListRelationFilter } from '../../employee-task/dto/employee-task-list-relation-filter.input';

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

    @Field(() => BigIntFilter, {nullable:true})
    workshopJobId?: BigIntFilter;

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

    @Field(() => WorkshopJobRelationFilter, {nullable:true})
    @Type(() => WorkshopJobRelationFilter)
    workshopJob?: WorkshopJobRelationFilter;

    @Field(() => ServiceRelationFilter, {nullable:true})
    @Type(() => ServiceRelationFilter)
    service?: ServiceRelationFilter;

    @Field(() => EmployeeTaskListRelationFilter, {nullable:true})
    @Type(() => EmployeeTaskListRelationFilter)
    taskEmployees?: EmployeeTaskListRelationFilter;
}
