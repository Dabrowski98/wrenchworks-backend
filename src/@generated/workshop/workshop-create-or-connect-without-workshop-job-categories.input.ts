import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutWorkshopJobCategoriesInput } from './workshop-create-without-workshop-job-categories.input';

@InputType()
export class WorkshopCreateOrConnectWithoutWorkshopJobCategoriesInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopCreateWithoutWorkshopJobCategoriesInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutWorkshopJobCategoriesInput)
    create!: WorkshopCreateWithoutWorkshopJobCategoriesInput;
}
