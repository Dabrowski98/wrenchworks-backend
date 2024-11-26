import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutServiceInput } from './task-create-without-service.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { TaskCreateOrConnectWithoutServiceInput } from './task-create-or-connect-without-service.input';
import { TaskUpsertWithWhereUniqueWithoutServiceInput } from './task-upsert-with-where-unique-without-service.input';
import { TaskCreateManyServiceInputEnvelope } from './task-create-many-service-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutServiceInput } from './task-update-with-where-unique-without-service.input';
import { TaskUpdateManyWithWhereWithoutServiceInput } from './task-update-many-with-where-without-service.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUncheckedUpdateManyWithoutServiceNestedInput {

    @Field(() => [TaskCreateWithoutServiceInput], {nullable:true})
    @Type(() => TaskCreateWithoutServiceInput)
    @ValidateNested()
    create?: Array<TaskCreateWithoutServiceInput>;

    @Field(() => [TaskCreateOrConnectWithoutServiceInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutServiceInput)
    @ValidateNested()
    connectOrCreate?: Array<TaskCreateOrConnectWithoutServiceInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutServiceInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutServiceInput)
    @ValidateNested()
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutServiceInput>;

    @Field(() => TaskCreateManyServiceInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyServiceInputEnvelope)
    @ValidateNested()
    createMany?: TaskCreateManyServiceInputEnvelope;

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

    @Field(() => [TaskUpdateWithWhereUniqueWithoutServiceInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutServiceInput)
    @ValidateNested()
    update?: Array<TaskUpdateWithWhereUniqueWithoutServiceInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutServiceInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutServiceInput)
    @ValidateNested()
    updateMany?: Array<TaskUpdateManyWithWhereWithoutServiceInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<TaskScalarWhereInput>;
}
