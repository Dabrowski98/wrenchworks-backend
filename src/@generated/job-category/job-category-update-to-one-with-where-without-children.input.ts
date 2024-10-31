import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryWhereInput } from './job-category-where.input';
import { Type } from 'class-transformer';
import { JobCategoryUpdateWithoutChildrenInput } from './job-category-update-without-children.input';

@InputType()
export class JobCategoryUpdateToOneWithWhereWithoutChildrenInput {

    @Field(() => JobCategoryWhereInput, {nullable:true})
    @Type(() => JobCategoryWhereInput)
    where?: JobCategoryWhereInput;

    @Field(() => JobCategoryUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => JobCategoryUpdateWithoutChildrenInput)
    data!: JobCategoryUpdateWithoutChildrenInput;
}
