import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateNestedOneWithoutJobCategoryWorkshopsInput } from '../job-category/job-category-create-nested-one-without-job-category-workshops.input';

@InputType()
export class WorkshopJobCategoryCreateWithoutWorkshopInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => JobCategoryCreateNestedOneWithoutJobCategoryWorkshopsInput, {nullable:false})
    jobCategory!: JobCategoryCreateNestedOneWithoutJobCategoryWorkshopsInput;
}
