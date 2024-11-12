import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateManyJobCategoryInput } from './job-create-many-job-category.input';
import { Type } from 'class-transformer';

@InputType()
export class JobCreateManyJobCategoryInputEnvelope {

    @Field(() => [JobCreateManyJobCategoryInput], {nullable:false})
    @Type(() => JobCreateManyJobCategoryInput)
    data!: Array<JobCreateManyJobCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
