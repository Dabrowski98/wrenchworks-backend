import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobCategoryCreateManyInput } from './job-category-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyJobCategoryArgs {

    @Field(() => [JobCategoryCreateManyInput], {nullable:false})
    @Type(() => JobCategoryCreateManyInput)
    @ValidateNested()
    data!: Array<JobCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
