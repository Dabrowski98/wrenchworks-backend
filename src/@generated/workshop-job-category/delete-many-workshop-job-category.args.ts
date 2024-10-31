import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobCategoryWhereInput } from './workshop-job-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWorkshopJobCategoryArgs {

    @Field(() => WorkshopJobCategoryWhereInput, {nullable:true})
    @Type(() => WorkshopJobCategoryWhereInput)
    where?: WorkshopJobCategoryWhereInput;
}
