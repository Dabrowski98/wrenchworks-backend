import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopJobCategoryWhereUniqueInput } from './workshop-job-category-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryCreateWithoutJobCategoryInput } from './workshop-job-category-create-without-job-category.input';

@InputType()
export class WorkshopJobCategoryCreateOrConnectWithoutJobCategoryInput {

    @Field(() => WorkshopJobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopJobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopJobCategoryWhereUniqueInput, 'workshopId_categoryId'>;

    @Field(() => WorkshopJobCategoryCreateWithoutJobCategoryInput, {nullable:false})
    @Type(() => WorkshopJobCategoryCreateWithoutJobCategoryInput)
    create!: WorkshopJobCategoryCreateWithoutJobCategoryInput;
}
