import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutTaskEmployeesInput } from './task-create-without-task-employees.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutTaskEmployeesInput } from './task-create-or-connect-without-task-employees.input';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedOneWithoutTaskEmployeesInput {

    @Field(() => TaskCreateWithoutTaskEmployeesInput, {nullable:true})
    @Type(() => TaskCreateWithoutTaskEmployeesInput)
    create?: TaskCreateWithoutTaskEmployeesInput;

    @Field(() => TaskCreateOrConnectWithoutTaskEmployeesInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutTaskEmployeesInput)
    connectOrCreate?: TaskCreateOrConnectWithoutTaskEmployeesInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>;
}
