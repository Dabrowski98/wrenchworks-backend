import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereInput } from './task-where.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskListRelationFilter {

    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    every?: TaskWhereInput;

    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    some?: TaskWhereInput;

    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    none?: TaskWhereInput;
}
