import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutWorkshopJobsInput } from './job-create-without-workshop-jobs.input';
import { HideField } from '@nestjs/graphql';
import { JobCreateOrConnectWithoutWorkshopJobsInput } from './job-create-or-connect-without-workshop-jobs.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class JobCreateNestedOneWithoutWorkshopJobsInput {

    @Field(() => JobWhereUniqueInput, {nullable:true})
    @Type(() => JobWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<JobWhereUniqueInput, 'jobId' | 'name'>;
}