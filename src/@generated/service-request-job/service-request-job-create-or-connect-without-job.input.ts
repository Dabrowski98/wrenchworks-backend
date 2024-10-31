import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestJobWhereUniqueInput } from './service-request-job-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestJobCreateWithoutJobInput } from './service-request-job-create-without-job.input';

@InputType()
export class ServiceRequestJobCreateOrConnectWithoutJobInput {

    @Field(() => ServiceRequestJobWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestJobWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestJobWhereUniqueInput, 'serviceRequestId_jobId'>;

    @Field(() => ServiceRequestJobCreateWithoutJobInput, {nullable:false})
    @Type(() => ServiceRequestJobCreateWithoutJobInput)
    create!: ServiceRequestJobCreateWithoutJobInput;
}
