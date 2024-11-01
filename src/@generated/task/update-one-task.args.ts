import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskUpdateInput } from './task-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@ArgsType()
export class UpdateOneTaskArgs {

    @Field(() => TaskUpdateInput, {nullable:false})
    @Type(() => TaskUpdateInput)
    data!: TaskUpdateInput;

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>;
}
