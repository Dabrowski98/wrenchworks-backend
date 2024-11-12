import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobCreateManyInput } from './workshop-job-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWorkshopJobArgs {

    @Field(() => [WorkshopJobCreateManyInput], {nullable:false})
    @Type(() => WorkshopJobCreateManyInput)
    data!: Array<WorkshopJobCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
