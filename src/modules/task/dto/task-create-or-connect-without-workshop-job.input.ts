import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutWorkshopJobInput } from './task-create-without-workshop-job.input';

@InputType()
export class TaskCreateOrConnectWithoutWorkshopJobInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>;

    @Field(() => TaskCreateWithoutWorkshopJobInput, {nullable:false})
    @Type(() => TaskCreateWithoutWorkshopJobInput)
    create!: TaskCreateWithoutWorkshopJobInput;
}
