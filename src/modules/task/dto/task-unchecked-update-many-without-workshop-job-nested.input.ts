import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutWorkshopJobInput } from './task-create-without-workshop-job.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { TaskCreateOrConnectWithoutWorkshopJobInput } from './task-create-or-connect-without-workshop-job.input';
import { TaskUpsertWithWhereUniqueWithoutWorkshopJobInput } from './task-upsert-with-where-unique-without-workshop-job.input';
import { TaskCreateManyWorkshopJobInputEnvelope } from './task-create-many-workshop-job-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutWorkshopJobInput } from './task-update-with-where-unique-without-workshop-job.input';
import { TaskUpdateManyWithWhereWithoutWorkshopJobInput } from './task-update-many-with-where-without-workshop-job.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUncheckedUpdateManyWithoutWorkshopJobNestedInput {

    @Field(() => [TaskCreateWithoutWorkshopJobInput], {nullable:true})
    @Type(() => TaskCreateWithoutWorkshopJobInput)
    @ValidateNested()
    create?: Array<TaskCreateWithoutWorkshopJobInput>;

    @Field(() => [TaskCreateOrConnectWithoutWorkshopJobInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutWorkshopJobInput)
    @ValidateNested()
    connectOrCreate?: Array<TaskCreateOrConnectWithoutWorkshopJobInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutWorkshopJobInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutWorkshopJobInput)
    @ValidateNested()
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutWorkshopJobInput>;

    @Field(() => TaskCreateManyWorkshopJobInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyWorkshopJobInputEnvelope)
    @ValidateNested()
    createMany?: TaskCreateManyWorkshopJobInputEnvelope;

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

    @Field(() => [TaskUpdateWithWhereUniqueWithoutWorkshopJobInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutWorkshopJobInput)
    @ValidateNested()
    update?: Array<TaskUpdateWithWhereUniqueWithoutWorkshopJobInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutWorkshopJobInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutWorkshopJobInput)
    @ValidateNested()
    updateMany?: Array<TaskUpdateManyWithWhereWithoutWorkshopJobInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<TaskScalarWhereInput>;
}
