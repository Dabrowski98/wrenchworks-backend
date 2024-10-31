import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCategoryScalarWhereInput } from './workshop-job-category-scalar-where.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryUpdateManyMutationInput } from './workshop-job-category-update-many-mutation.input';

@InputType()
export class WorkshopJobCategoryUpdateManyWithWhereWithoutJobCategoryInput {

    @Field(() => WorkshopJobCategoryScalarWhereInput, {nullable:false})
    @Type(() => WorkshopJobCategoryScalarWhereInput)
    where!: WorkshopJobCategoryScalarWhereInput;

    @Field(() => WorkshopJobCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkshopJobCategoryUpdateManyMutationInput)
    data!: WorkshopJobCategoryUpdateManyMutationInput;
}
