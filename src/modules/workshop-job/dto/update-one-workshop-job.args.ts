import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobUpdateInput } from './workshop-job-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';

@ArgsType()
export class UpdateOneWorkshopJobArgs {

    @Field(() => WorkshopJobUpdateInput, {nullable:false})
    @Type(() => WorkshopJobUpdateInput)
    data!: WorkshopJobUpdateInput;

    @Field(() => WorkshopJobWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopJobWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>;
}
