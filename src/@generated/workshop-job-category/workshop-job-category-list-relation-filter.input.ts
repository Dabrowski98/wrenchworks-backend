import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCategoryWhereInput } from './workshop-job-category-where.input';

@InputType()
export class WorkshopJobCategoryListRelationFilter {

    @Field(() => WorkshopJobCategoryWhereInput, {nullable:true})
    every?: WorkshopJobCategoryWhereInput;

    @Field(() => WorkshopJobCategoryWhereInput, {nullable:true})
    some?: WorkshopJobCategoryWhereInput;

    @Field(() => WorkshopJobCategoryWhereInput, {nullable:true})
    none?: WorkshopJobCategoryWhereInput;
}
