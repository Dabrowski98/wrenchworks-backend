import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobCategoryCreateManyInput } from './workshop-job-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWorkshopJobCategoryArgs {

    @Field(() => [WorkshopJobCategoryCreateManyInput], {nullable:false})
    @Type(() => WorkshopJobCategoryCreateManyInput)
    data!: Array<WorkshopJobCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
