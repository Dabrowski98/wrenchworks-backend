import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobScalarWhereInput } from './job-scalar-where.input';
import { Type } from 'class-transformer';
import { JobUpdateManyMutationInput } from './job-update-many-mutation.input';

@InputType()
export class JobUpdateManyWithWhereWithoutJobCategoryInput {

    @Field(() => JobScalarWhereInput, {nullable:false})
    @Type(() => JobScalarWhereInput)
    where!: JobScalarWhereInput;

    @Field(() => JobUpdateManyMutationInput, {nullable:false})
    @Type(() => JobUpdateManyMutationInput)
    data!: JobUpdateManyMutationInput;
}
