import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskUpdateInput } from './task-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneTaskArgs {

    @Field(() => TaskUpdateInput, {nullable:false})
    @Type(() => TaskUpdateInput)
    @Validator.ValidateNested()
    data!: TaskUpdateInput;

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>;
}
