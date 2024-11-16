import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutWorkshopJobInput } from './task-create-without-workshop-job.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutWorkshopJobInput } from './task-create-or-connect-without-workshop-job.input';
import { TaskCreateManyWorkshopJobInputEnvelope } from './task-create-many-workshop-job-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedManyWithoutWorkshopJobInput {

    @Field(() => [TaskCreateWithoutWorkshopJobInput], {nullable:true})
    @Type(() => TaskCreateWithoutWorkshopJobInput)
    create?: Array<TaskCreateWithoutWorkshopJobInput>;

    @Field(() => [TaskCreateOrConnectWithoutWorkshopJobInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutWorkshopJobInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutWorkshopJobInput>;

    @Field(() => TaskCreateManyWorkshopJobInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyWorkshopJobInputEnvelope)
    createMany?: TaskCreateManyWorkshopJobInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>>;
}
