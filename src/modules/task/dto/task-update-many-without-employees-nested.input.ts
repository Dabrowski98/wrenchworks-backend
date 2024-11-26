import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutEmployeesInput } from './task-create-without-employees.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { TaskCreateOrConnectWithoutEmployeesInput } from './task-create-or-connect-without-employees.input';
import { TaskUpsertWithWhereUniqueWithoutEmployeesInput } from './task-upsert-with-where-unique-without-employees.input';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutEmployeesInput } from './task-update-with-where-unique-without-employees.input';
import { TaskUpdateManyWithWhereWithoutEmployeesInput } from './task-update-many-with-where-without-employees.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUpdateManyWithoutEmployeesNestedInput {

    @Field(() => [TaskCreateWithoutEmployeesInput], {nullable:true})
    @Type(() => TaskCreateWithoutEmployeesInput)
    @ValidateNested()
    create?: Array<TaskCreateWithoutEmployeesInput>;

    @Field(() => [TaskCreateOrConnectWithoutEmployeesInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutEmployeesInput)
    @ValidateNested()
    connectOrCreate?: Array<TaskCreateOrConnectWithoutEmployeesInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutEmployeesInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutEmployeesInput)
    @ValidateNested()
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutEmployeesInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>>;

    @Field(() => [TaskUpdateWithWhereUniqueWithoutEmployeesInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutEmployeesInput)
    @ValidateNested()
    update?: Array<TaskUpdateWithWhereUniqueWithoutEmployeesInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutEmployeesInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutEmployeesInput)
    @ValidateNested()
    updateMany?: Array<TaskUpdateManyWithWhereWithoutEmployeesInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<TaskScalarWhereInput>;
}
