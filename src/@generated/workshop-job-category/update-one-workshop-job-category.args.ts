import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobCategoryUpdateInput } from './workshop-job-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { WorkshopJobCategoryWhereUniqueInput } from './workshop-job-category-where-unique.input';

@ArgsType()
export class UpdateOneWorkshopJobCategoryArgs {

    @Field(() => WorkshopJobCategoryUpdateInput, {nullable:false})
    @Type(() => WorkshopJobCategoryUpdateInput)
    data!: WorkshopJobCategoryUpdateInput;

    @Field(() => WorkshopJobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopJobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopJobCategoryWhereUniqueInput, 'workshopId_categoryId'>;
}
