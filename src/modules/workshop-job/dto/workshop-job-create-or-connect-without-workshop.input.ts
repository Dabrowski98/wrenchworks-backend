import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopJobCreateWithoutWorkshopInput } from './workshop-job-create-without-workshop.input';

@InputType()
export class WorkshopJobCreateOrConnectWithoutWorkshopInput {

    @Field(() => WorkshopJobWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopJobWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>;

    @Field(() => WorkshopJobCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopJobCreateWithoutWorkshopInput)
    create!: WorkshopJobCreateWithoutWorkshopInput;
}
