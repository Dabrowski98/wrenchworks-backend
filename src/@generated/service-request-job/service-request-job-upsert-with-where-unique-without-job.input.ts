import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestJobWhereUniqueInput } from './service-request-job-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestJobUpdateWithoutJobInput } from './service-request-job-update-without-job.input';
import { ServiceRequestJobCreateWithoutJobInput } from './service-request-job-create-without-job.input';

@InputType()
export class ServiceRequestJobUpsertWithWhereUniqueWithoutJobInput {

    @Field(() => ServiceRequestJobWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestJobWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestJobWhereUniqueInput, 'serviceRequestId_jobId'>;

    @Field(() => ServiceRequestJobUpdateWithoutJobInput, {nullable:false})
    @Type(() => ServiceRequestJobUpdateWithoutJobInput)
    update!: ServiceRequestJobUpdateWithoutJobInput;

    @Field(() => ServiceRequestJobCreateWithoutJobInput, {nullable:false})
    @Type(() => ServiceRequestJobCreateWithoutJobInput)
    create!: ServiceRequestJobCreateWithoutJobInput;
}
