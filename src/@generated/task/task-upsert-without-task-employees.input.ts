import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUpdateWithoutTaskEmployeesInput } from './task-update-without-task-employees.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutTaskEmployeesInput } from './task-create-without-task-employees.input';
import { TaskWhereInput } from './task-where.input';

@InputType()
export class TaskUpsertWithoutTaskEmployeesInput {

    @Field(() => TaskUpdateWithoutTaskEmployeesInput, {nullable:false})
    @Type(() => TaskUpdateWithoutTaskEmployeesInput)
    update!: TaskUpdateWithoutTaskEmployeesInput;

    @Field(() => TaskCreateWithoutTaskEmployeesInput, {nullable:false})
    @Type(() => TaskCreateWithoutTaskEmployeesInput)
    create!: TaskCreateWithoutTaskEmployeesInput;

    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    where?: TaskWhereInput;
}
