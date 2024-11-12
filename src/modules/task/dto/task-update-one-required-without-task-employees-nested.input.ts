import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutTaskEmployeesInput } from './task-create-without-task-employees.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutTaskEmployeesInput } from './task-create-or-connect-without-task-employees.input';
import { TaskUpsertWithoutTaskEmployeesInput } from './task-upsert-without-task-employees.input';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateToOneWithWhereWithoutTaskEmployeesInput } from './task-update-to-one-with-where-without-task-employees.input';

@InputType()
export class TaskUpdateOneRequiredWithoutTaskEmployeesNestedInput {

    @Field(() => TaskCreateWithoutTaskEmployeesInput, {nullable:true})
    @Type(() => TaskCreateWithoutTaskEmployeesInput)
    create?: TaskCreateWithoutTaskEmployeesInput;

    @Field(() => TaskCreateOrConnectWithoutTaskEmployeesInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutTaskEmployeesInput)
    connectOrCreate?: TaskCreateOrConnectWithoutTaskEmployeesInput;

    @Field(() => TaskUpsertWithoutTaskEmployeesInput, {nullable:true})
    @Type(() => TaskUpsertWithoutTaskEmployeesInput)
    upsert?: TaskUpsertWithoutTaskEmployeesInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>;

    @Field(() => TaskUpdateToOneWithWhereWithoutTaskEmployeesInput, {nullable:true})
    @Type(() => TaskUpdateToOneWithWhereWithoutTaskEmployeesInput)
    update?: TaskUpdateToOneWithWhereWithoutTaskEmployeesInput;
}
