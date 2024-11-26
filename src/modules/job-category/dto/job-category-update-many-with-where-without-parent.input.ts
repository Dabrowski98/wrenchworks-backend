import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryScalarWhereInput } from './job-category-scalar-where.input';
import { Type } from 'class-transformer';
import { JobCategoryUpdateManyMutationInput } from './job-category-update-many-mutation.input';

@InputType()
export class JobCategoryUpdateManyWithWhereWithoutParentInput {

    @Field(() => JobCategoryScalarWhereInput, {nullable:false})
    @Type(() => JobCategoryScalarWhereInput)
    where!: JobCategoryScalarWhereInput;

    @Field(() => JobCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => JobCategoryUpdateManyMutationInput)
    data!: JobCategoryUpdateManyMutationInput;
}
