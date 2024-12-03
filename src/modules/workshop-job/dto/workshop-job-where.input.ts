import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { DecimalNullableFilter } from '../../prisma/dto/decimal-nullable-filter.input';
import { BoolFilter } from '../../prisma/dto/bool-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { TaskListRelationFilter } from '../../task/dto/task-list-relation-filter.input';
import { ValidateNested } from 'class-validator';
import { JobRelationFilter } from '../../job/dto/job-relation-filter.input';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';

@InputType()
export class WorkshopJobWhereInput {

    @Field(() => [WorkshopJobWhereInput], {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    AND?: Array<WorkshopJobWhereInput>;

    @Field(() => [WorkshopJobWhereInput], {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    OR?: Array<WorkshopJobWhereInput>;

    @Field(() => [WorkshopJobWhereInput], {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    NOT?: Array<WorkshopJobWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    workshopJobId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    jobId?: BigIntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    workshopJobDescription?: StringNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    minPrice?: DecimalNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    maxPrice?: DecimalNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    availability?: BoolFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    @Type(() => TaskListRelationFilter)
    @ValidateNested()
    @Type(() => TaskListRelationFilter)
    tasks?: TaskListRelationFilter;

    @Field(() => JobRelationFilter, {nullable:true})
    @Type(() => JobRelationFilter)
    @ValidateNested()
    @Type(() => JobRelationFilter)
    job?: JobRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}