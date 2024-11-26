import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobCreateInput } from './workshop-job-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneWorkshopJobArgs {

    @Field(() => WorkshopJobCreateInput, {nullable:false})
    @Type(() => WorkshopJobCreateInput)
    @ValidateNested()
    data!: WorkshopJobCreateInput;
}
