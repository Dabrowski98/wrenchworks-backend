import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { JobCategoryRelationFilter } from '../job-category/job-category-relation-filter.input';
import { WorkshopRelationFilter } from '../workshop/workshop-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopJobCategoryWhereInput {

    @Field(() => [WorkshopJobCategoryWhereInput], {nullable:true})
    AND?: Array<WorkshopJobCategoryWhereInput>;

    @Field(() => [WorkshopJobCategoryWhereInput], {nullable:true})
    OR?: Array<WorkshopJobCategoryWhereInput>;

    @Field(() => [WorkshopJobCategoryWhereInput], {nullable:true})
    NOT?: Array<WorkshopJobCategoryWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    categoryId?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => JobCategoryRelationFilter, {nullable:true})
    jobCategory?: JobCategoryRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;
}
