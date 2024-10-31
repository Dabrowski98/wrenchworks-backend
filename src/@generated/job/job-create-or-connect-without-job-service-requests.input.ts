import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { JobCreateWithoutJobServiceRequestsInput } from './job-create-without-job-service-requests.input';

@InputType()
export class JobCreateOrConnectWithoutJobServiceRequestsInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    where!: Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>;

    @Field(() => JobCreateWithoutJobServiceRequestsInput, {nullable:false})
    @Type(() => JobCreateWithoutJobServiceRequestsInput)
    create!: JobCreateWithoutJobServiceRequestsInput;
}
