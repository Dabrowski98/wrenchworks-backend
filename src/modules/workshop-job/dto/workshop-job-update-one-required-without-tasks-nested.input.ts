import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopJobCreateWithoutTasksInput } from './workshop-job-create-without-tasks.input';
import { Type } from 'class-transformer';
import { WorkshopJobCreateOrConnectWithoutTasksInput } from './workshop-job-create-or-connect-without-tasks.input';
import { WorkshopJobUpsertWithoutTasksInput } from './workshop-job-upsert-without-tasks.input';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';
import { WorkshopJobUpdateToOneWithWhereWithoutTasksInput } from './workshop-job-update-to-one-with-where-without-tasks.input';

@InputType()
export class WorkshopJobUpdateOneRequiredWithoutTasksNestedInput {

    @Field(() => WorkshopJobCreateWithoutTasksInput, {nullable:true})
    @Type(() => WorkshopJobCreateWithoutTasksInput)
    create?: WorkshopJobCreateWithoutTasksInput;

    @Field(() => WorkshopJobCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => WorkshopJobCreateOrConnectWithoutTasksInput)
    connectOrCreate?: WorkshopJobCreateOrConnectWithoutTasksInput;

    @Field(() => WorkshopJobUpsertWithoutTasksInput, {nullable:true})
    @Type(() => WorkshopJobUpsertWithoutTasksInput)
    upsert?: WorkshopJobUpsertWithoutTasksInput;

    @Field(() => WorkshopJobWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>;

    @Field(() => WorkshopJobUpdateToOneWithWhereWithoutTasksInput, {nullable:true})
    @Type(() => WorkshopJobUpdateToOneWithWhereWithoutTasksInput)
    update?: WorkshopJobUpdateToOneWithWhereWithoutTasksInput;
}