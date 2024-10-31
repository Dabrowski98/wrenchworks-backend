import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopJobCategoryWhereUniqueInput } from './workshop-job-category-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryUpdateWithoutWorkshopInput } from './workshop-job-category-update-without-workshop.input';

@InputType()
export class WorkshopJobCategoryUpdateWithWhereUniqueWithoutWorkshopInput {

    @Field(() => WorkshopJobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopJobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopJobCategoryWhereUniqueInput, 'workshopId_categoryId'>;

    @Field(() => WorkshopJobCategoryUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopJobCategoryUpdateWithoutWorkshopInput)
    data!: WorkshopJobCategoryUpdateWithoutWorkshopInput;
}
