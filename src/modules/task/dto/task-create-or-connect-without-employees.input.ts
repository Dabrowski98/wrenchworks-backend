import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutEmployeesInput } from './task-create-without-employees.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class TaskCreateOrConnectWithoutEmployeesInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>;

    @Field(() => TaskCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => TaskCreateWithoutEmployeesInput)
    @ValidateNested()
    create!: TaskCreateWithoutEmployeesInput;
}
