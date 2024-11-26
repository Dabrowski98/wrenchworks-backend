import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopJobUpdateWithoutJobInput } from './workshop-job-update-without-job.input';
import { ValidateNested } from 'class-validator';
import { WorkshopJobCreateWithoutJobInput } from './workshop-job-create-without-job.input';

@InputType()
export class WorkshopJobUpsertWithWhereUniqueWithoutJobInput {

    @Field(() => WorkshopJobWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopJobWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>;

    @Field(() => WorkshopJobUpdateWithoutJobInput, {nullable:false})
    @Type(() => WorkshopJobUpdateWithoutJobInput)
    @ValidateNested()
    update!: WorkshopJobUpdateWithoutJobInput;

    @Field(() => WorkshopJobCreateWithoutJobInput, {nullable:false})
    @Type(() => WorkshopJobCreateWithoutJobInput)
    @ValidateNested()
    create!: WorkshopJobCreateWithoutJobInput;
}
