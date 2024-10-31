import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateManyChildInput } from './job-category-create-many-child.input';
import { Type } from 'class-transformer';

@InputType()
export class JobCategoryCreateManyChildInputEnvelope {

    @Field(() => [JobCategoryCreateManyChildInput], {nullable:false})
    @Type(() => JobCategoryCreateManyChildInput)
    data!: Array<JobCategoryCreateManyChildInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
