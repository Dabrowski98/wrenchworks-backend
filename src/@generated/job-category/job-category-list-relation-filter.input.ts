import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryWhereInput } from './job-category-where.input';

@InputType()
export class JobCategoryListRelationFilter {

    @Field(() => JobCategoryWhereInput, {nullable:true})
    every?: JobCategoryWhereInput;

    @Field(() => JobCategoryWhereInput, {nullable:true})
    some?: JobCategoryWhereInput;

    @Field(() => JobCategoryWhereInput, {nullable:true})
    none?: JobCategoryWhereInput;
}
