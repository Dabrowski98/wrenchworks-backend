import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopJobUpdateWithoutWorkshopInput } from './workshop-job-update-without-workshop.input';

@InputType()
export class WorkshopJobUpdateWithWhereUniqueWithoutWorkshopInput {

    @Field(() => WorkshopJobWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopJobWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>;

    @Field(() => WorkshopJobUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopJobUpdateWithoutWorkshopInput)
    data!: WorkshopJobUpdateWithoutWorkshopInput;
}
