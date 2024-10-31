import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestJobWhereUniqueInput } from './service-request-job-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestJobUpdateWithoutJobInput } from './service-request-job-update-without-job.input';

@InputType()
export class ServiceRequestJobUpdateWithWhereUniqueWithoutJobInput {

    @Field(() => ServiceRequestJobWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestJobWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestJobWhereUniqueInput, 'serviceRequestId_jobId'>;

    @Field(() => ServiceRequestJobUpdateWithoutJobInput, {nullable:false})
    @Type(() => ServiceRequestJobUpdateWithoutJobInput)
    data!: ServiceRequestJobUpdateWithoutJobInput;
}
