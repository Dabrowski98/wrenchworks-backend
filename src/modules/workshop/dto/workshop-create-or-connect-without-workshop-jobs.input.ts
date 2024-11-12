import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutWorkshopJobsInput } from './workshop-create-without-workshop-jobs.input';

@InputType()
export class WorkshopCreateOrConnectWithoutWorkshopJobsInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopCreateWithoutWorkshopJobsInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutWorkshopJobsInput)
    create!: WorkshopCreateWithoutWorkshopJobsInput;
}
