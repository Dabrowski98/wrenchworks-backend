import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobUpdateInput } from './workshop-job-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneWorkshopJobArgs {

    @Field(() => WorkshopJobUpdateInput, {nullable:false})
    @Type(() => WorkshopJobUpdateInput)
    @Validator.ValidateNested()
    data!: WorkshopJobUpdateInput;

    @Field(() => WorkshopJobWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopJobWhereUniqueInput)
    @Validator.Allow()  
    where!: Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>;
}
