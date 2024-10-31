import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCategoryWorkshopIdCategoryIdCompoundUniqueInput } from './workshop-job-category-workshop-id-category-id-compound-unique.input';
import { WorkshopJobCategoryWhereInput } from './workshop-job-category-where.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { JobCategoryRelationFilter } from '../job-category/job-category-relation-filter.input';
import { WorkshopRelationFilter } from '../workshop/workshop-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopJobCategoryWhereUniqueInput {

    @Field(() => WorkshopJobCategoryWorkshopIdCategoryIdCompoundUniqueInput, {nullable:true})
    workshopId_categoryId?: WorkshopJobCategoryWorkshopIdCategoryIdCompoundUniqueInput;

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
