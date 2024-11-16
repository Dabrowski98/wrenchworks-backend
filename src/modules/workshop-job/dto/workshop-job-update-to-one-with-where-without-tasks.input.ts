import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobWhereInput } from './workshop-job-where.input';
import { Type } from 'class-transformer';
import { WorkshopJobUpdateWithoutTasksInput } from './workshop-job-update-without-tasks.input';

@InputType()
export class WorkshopJobUpdateToOneWithWhereWithoutTasksInput {

    @Field(() => WorkshopJobWhereInput, {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    where?: WorkshopJobWhereInput;

    @Field(() => WorkshopJobUpdateWithoutTasksInput, {nullable:false})
    @Type(() => WorkshopJobUpdateWithoutTasksInput)
    data!: WorkshopJobUpdateWithoutTasksInput;
}
