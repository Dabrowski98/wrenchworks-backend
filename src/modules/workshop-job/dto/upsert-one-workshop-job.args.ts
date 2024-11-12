import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopJobCreateInput } from './workshop-job-create.input';
import { WorkshopJobUpdateInput } from './workshop-job-update.input';

@ArgsType()
export class UpsertOneWorkshopJobArgs {

    @Field(() => WorkshopJobWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopJobWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>;

    @Field(() => WorkshopJobCreateInput, {nullable:false})
    @Type(() => WorkshopJobCreateInput)
    create!: WorkshopJobCreateInput;

    @Field(() => WorkshopJobUpdateInput, {nullable:false})
    @Type(() => WorkshopJobUpdateInput)
    update!: WorkshopJobUpdateInput;
}
