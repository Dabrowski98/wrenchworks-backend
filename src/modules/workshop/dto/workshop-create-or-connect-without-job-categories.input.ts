import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutJobCategoriesInput } from './workshop-create-without-job-categories.input';

@InputType()
export class WorkshopCreateOrConnectWithoutJobCategoriesInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopCreateWithoutJobCategoriesInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutJobCategoriesInput)
    create!: WorkshopCreateWithoutJobCategoriesInput;
}
