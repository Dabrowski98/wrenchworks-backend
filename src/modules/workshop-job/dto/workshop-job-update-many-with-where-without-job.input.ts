import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobScalarWhereInput } from './workshop-job-scalar-where.input';
import { Type } from 'class-transformer';
import { WorkshopJobUpdateManyMutationInput } from './workshop-job-update-many-mutation.input';

@InputType()
export class WorkshopJobUpdateManyWithWhereWithoutJobInput {

    @Field(() => WorkshopJobScalarWhereInput, {nullable:false})
    @Type(() => WorkshopJobScalarWhereInput)
    where!: WorkshopJobScalarWhereInput;

    @Field(() => WorkshopJobUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkshopJobUpdateManyMutationInput)
    data!: WorkshopJobUpdateManyMutationInput;
}
