import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutServiceInput } from './task-update-without-service.input';
import { TaskCreateWithoutServiceInput } from './task-create-without-service.input';

@InputType()
export class TaskUpsertWithWhereUniqueWithoutServiceInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>;

    @Field(() => TaskUpdateWithoutServiceInput, {nullable:false})
    @Type(() => TaskUpdateWithoutServiceInput)
    update!: TaskUpdateWithoutServiceInput;

    @Field(() => TaskCreateWithoutServiceInput, {nullable:false})
    @Type(() => TaskCreateWithoutServiceInput)
    create!: TaskCreateWithoutServiceInput;
}
