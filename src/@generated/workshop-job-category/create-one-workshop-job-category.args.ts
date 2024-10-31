import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobCategoryCreateInput } from './workshop-job-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneWorkshopJobCategoryArgs {

    @Field(() => WorkshopJobCategoryCreateInput, {nullable:false})
    @Type(() => WorkshopJobCategoryCreateInput)
    data!: WorkshopJobCategoryCreateInput;
}
