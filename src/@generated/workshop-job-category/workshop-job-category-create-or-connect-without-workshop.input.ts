import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopJobCategoryWhereUniqueInput } from './workshop-job-category-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryCreateWithoutWorkshopInput } from './workshop-job-category-create-without-workshop.input';

@InputType()
export class WorkshopJobCategoryCreateOrConnectWithoutWorkshopInput {

    @Field(() => WorkshopJobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopJobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopJobCategoryWhereUniqueInput, 'workshopId_categoryId'>;

    @Field(() => WorkshopJobCategoryCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopJobCategoryCreateWithoutWorkshopInput)
    create!: WorkshopJobCategoryCreateWithoutWorkshopInput;
}
