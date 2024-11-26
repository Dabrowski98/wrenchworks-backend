import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutServiceInput } from './task-create-without-service.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class TaskCreateOrConnectWithoutServiceInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>;

    @Field(() => TaskCreateWithoutServiceInput, {nullable:false})
    @Type(() => TaskCreateWithoutServiceInput)
    @ValidateNested()
    create!: TaskCreateWithoutServiceInput;
}
