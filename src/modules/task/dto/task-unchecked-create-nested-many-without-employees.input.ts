import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutEmployeesInput } from './task-create-without-employees.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { TaskCreateOrConnectWithoutEmployeesInput } from './task-create-or-connect-without-employees.input';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskUncheckedCreateNestedManyWithoutEmployeesInput {

    @Field(() => [TaskCreateWithoutEmployeesInput], {nullable:true})
    @Type(() => TaskCreateWithoutEmployeesInput)
    @ValidateNested()
    create?: Array<TaskCreateWithoutEmployeesInput>;

    @Field(() => [TaskCreateOrConnectWithoutEmployeesInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutEmployeesInput)
    @ValidateNested()
    connectOrCreate?: Array<TaskCreateOrConnectWithoutEmployeesInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>>;
}
