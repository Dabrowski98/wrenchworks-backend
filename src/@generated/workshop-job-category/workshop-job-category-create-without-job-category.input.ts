import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateNestedOneWithoutWorkshopJobCategoriesInput } from '../workshop/workshop-create-nested-one-without-workshop-job-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopJobCategoryCreateWithoutJobCategoryInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => WorkshopCreateNestedOneWithoutWorkshopJobCategoriesInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutWorkshopJobCategoriesInput)
    workshop!: WorkshopCreateNestedOneWithoutWorkshopJobCategoriesInput;
}
