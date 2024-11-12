import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntWithAggregatesFilter } from '../../prisma/dto/big-int-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../../prisma/dto/big-int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/dto/string-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/dto/string-with-aggregates-filter.input';
import { EnumTasksStatusNullableWithAggregatesFilter } from '../../prisma/dto/enum-tasks-status-nullable-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../../prisma/dto/float-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../../prisma/dto/decimal-with-aggregates-filter.input';

@InputType()
export class TaskScalarWhereWithAggregatesInput {

    @Field(() => [TaskScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => TaskScalarWhereWithAggregatesInput)
    AND?: Array<TaskScalarWhereWithAggregatesInput>;

    @Field(() => [TaskScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => TaskScalarWhereWithAggregatesInput)
    OR?: Array<TaskScalarWhereWithAggregatesInput>;

    @Field(() => [TaskScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => TaskScalarWhereWithAggregatesInput)
    NOT?: Array<TaskScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    taskId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    serviceId?: BigIntWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {nullable:true})
    jobId?: BigIntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    customName?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => EnumTasksStatusNullableWithAggregatesFilter, {nullable:true})
    status?: EnumTasksStatusNullableWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    executionTime?: FloatWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    partsCost?: DecimalWithAggregatesFilter;
}
