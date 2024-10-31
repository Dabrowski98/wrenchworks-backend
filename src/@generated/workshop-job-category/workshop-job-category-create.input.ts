import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateNestedOneWithoutJobCategoryWorkshopsInput } from '../job-category/job-category-create-nested-one-without-job-category-workshops.input';
import { WorkshopCreateNestedOneWithoutWorkshopJobCategoriesInput } from '../workshop/workshop-create-nested-one-without-workshop-job-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopJobCategoryCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => JobCategoryCreateNestedOneWithoutJobCategoryWorkshopsInput, {nullable:false})
    jobCategory!: JobCategoryCreateNestedOneWithoutJobCategoryWorkshopsInput;

    @Field(() => WorkshopCreateNestedOneWithoutWorkshopJobCategoriesInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutWorkshopJobCategoriesInput)
    workshop!: WorkshopCreateNestedOneWithoutWorkshopJobCategoriesInput;
}
