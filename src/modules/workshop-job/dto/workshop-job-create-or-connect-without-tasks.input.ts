import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopJobCreateWithoutTasksInput } from './workshop-job-create-without-tasks.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopJobCreateOrConnectWithoutTasksInput {

    @Field(() => WorkshopJobWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopJobWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>;

    @Field(() => WorkshopJobCreateWithoutTasksInput, {nullable:false})
    @Type(() => WorkshopJobCreateWithoutTasksInput)
    @ValidateNested()
    create!: WorkshopJobCreateWithoutTasksInput;
}
