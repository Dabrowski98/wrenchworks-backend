import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopJobCreateWithoutJobInput } from './workshop-job-create-without-job.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopJobCreateOrConnectWithoutJobInput {

    @Field(() => WorkshopJobWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopJobWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>;

    @Field(() => WorkshopJobCreateWithoutJobInput, {nullable:false})
    @Type(() => WorkshopJobCreateWithoutJobInput)
    @ValidateNested()
    create!: WorkshopJobCreateWithoutJobInput;
}
