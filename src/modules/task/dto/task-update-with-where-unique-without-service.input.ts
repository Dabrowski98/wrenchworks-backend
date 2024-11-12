import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutServiceInput } from './task-update-without-service.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutServiceInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>;

    @Field(() => TaskUpdateWithoutServiceInput, {nullable:false})
    @Type(() => TaskUpdateWithoutServiceInput)
    data!: TaskUpdateWithoutServiceInput;
}
