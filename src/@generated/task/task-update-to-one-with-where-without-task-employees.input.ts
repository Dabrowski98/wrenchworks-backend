import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereInput } from './task-where.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutTaskEmployeesInput } from './task-update-without-task-employees.input';

@InputType()
export class TaskUpdateToOneWithWhereWithoutTaskEmployeesInput {

    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    where?: TaskWhereInput;

    @Field(() => TaskUpdateWithoutTaskEmployeesInput, {nullable:false})
    @Type(() => TaskUpdateWithoutTaskEmployeesInput)
    data!: TaskUpdateWithoutTaskEmployeesInput;
}
