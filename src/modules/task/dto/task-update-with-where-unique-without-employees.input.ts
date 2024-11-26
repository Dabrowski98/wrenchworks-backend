import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutEmployeesInput } from './task-update-without-employees.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutEmployeesInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>;

    @Field(() => TaskUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => TaskUpdateWithoutEmployeesInput)
    data!: TaskUpdateWithoutEmployeesInput;
}
