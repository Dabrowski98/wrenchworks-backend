import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobCategoryUpdateManyMutationInput } from './workshop-job-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryWhereInput } from './workshop-job-category-where.input';

@ArgsType()
export class UpdateManyWorkshopJobCategoryArgs {

    @Field(() => WorkshopJobCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkshopJobCategoryUpdateManyMutationInput)
    data!: WorkshopJobCategoryUpdateManyMutationInput;

    @Field(() => WorkshopJobCategoryWhereInput, {nullable:true})
    @Type(() => WorkshopJobCategoryWhereInput)
    where?: WorkshopJobCategoryWhereInput;
}
