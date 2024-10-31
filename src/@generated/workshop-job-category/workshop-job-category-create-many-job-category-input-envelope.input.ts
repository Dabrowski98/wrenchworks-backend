import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCategoryCreateManyJobCategoryInput } from './workshop-job-category-create-many-job-category.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopJobCategoryCreateManyJobCategoryInputEnvelope {

    @Field(() => [WorkshopJobCategoryCreateManyJobCategoryInput], {nullable:false})
    @Type(() => WorkshopJobCategoryCreateManyJobCategoryInput)
    data!: Array<WorkshopJobCategoryCreateManyJobCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
