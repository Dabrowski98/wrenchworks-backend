import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutWorkshopJobCategoriesInput } from './workshop-update-without-workshop-job-categories.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutWorkshopJobCategoriesInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutWorkshopJobCategoriesInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopJobCategoriesInput)
    data!: WorkshopUpdateWithoutWorkshopJobCategoriesInput;
}
