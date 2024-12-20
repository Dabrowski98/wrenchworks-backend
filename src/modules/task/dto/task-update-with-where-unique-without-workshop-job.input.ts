import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutWorkshopJobInput } from './task-update-without-workshop-job.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutWorkshopJobInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>;

    @Field(() => TaskUpdateWithoutWorkshopJobInput, {nullable:false})
    @Type(() => TaskUpdateWithoutWorkshopJobInput)
    data!: TaskUpdateWithoutWorkshopJobInput;
}
