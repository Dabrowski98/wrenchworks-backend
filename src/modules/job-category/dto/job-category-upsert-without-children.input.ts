import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryUpdateWithoutChildrenInput } from './job-category-update-without-children.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JobCategoryCreateWithoutChildrenInput } from './job-category-create-without-children.input';
import { JobCategoryWhereInput } from './job-category-where.input';

@InputType()
export class JobCategoryUpsertWithoutChildrenInput {

    @Field(() => JobCategoryUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => JobCategoryUpdateWithoutChildrenInput)
    @ValidateNested()
    update!: JobCategoryUpdateWithoutChildrenInput;

    @Field(() => JobCategoryCreateWithoutChildrenInput, {nullable:false})
    @Type(() => JobCategoryCreateWithoutChildrenInput)
    @ValidateNested()
    create!: JobCategoryCreateWithoutChildrenInput;

    @Field(() => JobCategoryWhereInput, {nullable:true})
    @Type(() => JobCategoryWhereInput)
    where?: JobCategoryWhereInput;
}
