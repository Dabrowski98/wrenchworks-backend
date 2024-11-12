import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutWorkshopJobsInput } from './workshop-update-without-workshop-jobs.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutWorkshopJobsInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutWorkshopJobsInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopJobsInput)
    data!: WorkshopUpdateWithoutWorkshopJobsInput;
}
