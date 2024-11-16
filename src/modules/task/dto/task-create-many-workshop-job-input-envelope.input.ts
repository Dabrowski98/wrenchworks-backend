import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyWorkshopJobInput } from './task-create-many-workshop-job.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskCreateManyWorkshopJobInputEnvelope {

    @Field(() => [TaskCreateManyWorkshopJobInput], {nullable:false})
    @Type(() => TaskCreateManyWorkshopJobInput)
    data!: Array<TaskCreateManyWorkshopJobInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
