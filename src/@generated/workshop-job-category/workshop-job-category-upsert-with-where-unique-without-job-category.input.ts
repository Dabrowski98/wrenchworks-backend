import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopJobCategoryWhereUniqueInput } from './workshop-job-category-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryUpdateWithoutJobCategoryInput } from './workshop-job-category-update-without-job-category.input';
import { WorkshopJobCategoryCreateWithoutJobCategoryInput } from './workshop-job-category-create-without-job-category.input';

@InputType()
export class WorkshopJobCategoryUpsertWithWhereUniqueWithoutJobCategoryInput {

    @Field(() => WorkshopJobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopJobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopJobCategoryWhereUniqueInput, 'workshopId_categoryId'>;

    @Field(() => WorkshopJobCategoryUpdateWithoutJobCategoryInput, {nullable:false})
    @Type(() => WorkshopJobCategoryUpdateWithoutJobCategoryInput)
    update!: WorkshopJobCategoryUpdateWithoutJobCategoryInput;

    @Field(() => WorkshopJobCategoryCreateWithoutJobCategoryInput, {nullable:false})
    @Type(() => WorkshopJobCategoryCreateWithoutJobCategoryInput)
    create!: WorkshopJobCategoryCreateWithoutJobCategoryInput;
}
