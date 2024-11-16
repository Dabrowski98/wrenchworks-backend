import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { JobCreateWithoutJobWorkshopsInput } from './job-create-without-job-workshops.input';

@InputType()
export class JobCreateOrConnectWithoutJobWorkshopsInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    where!: Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>;

    @Field(() => JobCreateWithoutJobWorkshopsInput, {nullable:false})
    @Type(() => JobCreateWithoutJobWorkshopsInput)
    create!: JobCreateWithoutJobWorkshopsInput;
}