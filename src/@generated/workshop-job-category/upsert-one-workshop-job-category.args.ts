import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopJobCategoryWhereUniqueInput } from './workshop-job-category-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryCreateInput } from './workshop-job-category-create.input';
import { WorkshopJobCategoryUpdateInput } from './workshop-job-category-update.input';

@ArgsType()
export class UpsertOneWorkshopJobCategoryArgs {

    @Field(() => WorkshopJobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopJobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopJobCategoryWhereUniqueInput, 'workshopId_categoryId'>;

    @Field(() => WorkshopJobCategoryCreateInput, {nullable:false})
    @Type(() => WorkshopJobCategoryCreateInput)
    create!: WorkshopJobCategoryCreateInput;

    @Field(() => WorkshopJobCategoryUpdateInput, {nullable:false})
    @Type(() => WorkshopJobCategoryUpdateInput)
    update!: WorkshopJobCategoryUpdateInput;
}
