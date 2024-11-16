import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobUpdateManyMutationInput } from './workshop-job-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WorkshopJobWhereInput } from './workshop-job-where.input';

@ArgsType()
export class UpdateManyWorkshopJobArgs {

    @Field(() => WorkshopJobUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkshopJobUpdateManyMutationInput)
    data!: WorkshopJobUpdateManyMutationInput;

    @Field(() => WorkshopJobWhereInput, {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    where?: WorkshopJobWhereInput;
}