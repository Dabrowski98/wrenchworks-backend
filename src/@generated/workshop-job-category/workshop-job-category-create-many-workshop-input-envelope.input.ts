import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCategoryCreateManyWorkshopInput } from './workshop-job-category-create-many-workshop.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopJobCategoryCreateManyWorkshopInputEnvelope {

    @Field(() => [WorkshopJobCategoryCreateManyWorkshopInput], {nullable:false})
    @Type(() => WorkshopJobCategoryCreateManyWorkshopInput)
    data!: Array<WorkshopJobCategoryCreateManyWorkshopInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
