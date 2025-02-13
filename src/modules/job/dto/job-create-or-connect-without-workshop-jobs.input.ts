import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { JobCreateWithoutWorkshopJobsInput } from './job-create-without-workshop-jobs.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class JobCreateOrConnectWithoutWorkshopJobsInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    where!: Prisma.AtLeast<JobWhereUniqueInput, 'jobId' | 'name'>;

    @Field(() => JobCreateWithoutWorkshopJobsInput, {nullable:false})
    @Type(() => JobCreateWithoutWorkshopJobsInput)
    @ValidateNested()
    create!: JobCreateWithoutWorkshopJobsInput;
}
