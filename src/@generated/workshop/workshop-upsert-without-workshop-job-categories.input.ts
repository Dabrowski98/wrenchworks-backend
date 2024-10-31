import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutWorkshopJobCategoriesInput } from './workshop-update-without-workshop-job-categories.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutWorkshopJobCategoriesInput } from './workshop-create-without-workshop-job-categories.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutWorkshopJobCategoriesInput {

    @Field(() => WorkshopUpdateWithoutWorkshopJobCategoriesInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopJobCategoriesInput)
    update!: WorkshopUpdateWithoutWorkshopJobCategoriesInput;

    @Field(() => WorkshopCreateWithoutWorkshopJobCategoriesInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutWorkshopJobCategoriesInput)
    create!: WorkshopCreateWithoutWorkshopJobCategoriesInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
