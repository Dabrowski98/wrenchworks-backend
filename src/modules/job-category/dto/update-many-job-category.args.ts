import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobCategoryUpdateManyMutationInput } from './job-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JobCategoryWhereInput } from './job-category-where.input';

@ArgsType()
export class UpdateManyJobCategoryArgs {

    @Field(() => JobCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => JobCategoryUpdateManyMutationInput)
    @ValidateNested()
    data!: JobCategoryUpdateManyMutationInput;

    @Field(() => JobCategoryWhereInput, {nullable:true})
    @Type(() => JobCategoryWhereInput)
    where?: JobCategoryWhereInput;
}
