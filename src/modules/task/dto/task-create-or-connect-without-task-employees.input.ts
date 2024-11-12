import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutTaskEmployeesInput } from './task-create-without-task-employees.input';

@InputType()
export class TaskCreateOrConnectWithoutTaskEmployeesInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>;

    @Field(() => TaskCreateWithoutTaskEmployeesInput, {nullable:false})
    @Type(() => TaskCreateWithoutTaskEmployeesInput)
    create!: TaskCreateWithoutTaskEmployeesInput;
}
