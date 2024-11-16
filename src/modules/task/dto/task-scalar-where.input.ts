import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { EnumTasksStatusNullableFilter } from '../../prisma/dto/enum-tasks-status-nullable-filter.input';
import { FloatFilter } from '../../prisma/dto/float-filter.input';
import { DecimalFilter } from '../../prisma/dto/decimal-filter.input';

@InputType()
export class TaskScalarWhereInput {

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    AND?: Array<TaskScalarWhereInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    OR?: Array<TaskScalarWhereInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    NOT?: Array<TaskScalarWhereInput>;

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
}
