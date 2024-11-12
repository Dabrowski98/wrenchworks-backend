import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereInput } from './task-where.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskRelationFilter {

    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    is?: TaskWhereInput;

    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    isNot?: TaskWhereInput;
}
