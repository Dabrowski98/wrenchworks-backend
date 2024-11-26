import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateManyParentInput } from './job-category-create-many-parent.input';
import { Type } from 'class-transformer';

@InputType()
export class JobCategoryCreateManyParentInputEnvelope {

    @Field(() => [JobCategoryCreateManyParentInput], {nullable:false})
    @Type(() => JobCategoryCreateManyParentInput)
    data!: Array<JobCategoryCreateManyParentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
