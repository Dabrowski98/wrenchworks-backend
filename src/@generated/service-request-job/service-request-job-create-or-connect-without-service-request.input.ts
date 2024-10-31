import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestJobWhereUniqueInput } from './service-request-job-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestJobCreateWithoutServiceRequestInput } from './service-request-job-create-without-service-request.input';

@InputType()
export class ServiceRequestJobCreateOrConnectWithoutServiceRequestInput {

    @Field(() => ServiceRequestJobWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestJobWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestJobWhereUniqueInput, 'serviceRequestId_jobId'>;

    @Field(() => ServiceRequestJobCreateWithoutServiceRequestInput, {nullable:false})
    @Type(() => ServiceRequestJobCreateWithoutServiceRequestInput)
    create!: ServiceRequestJobCreateWithoutServiceRequestInput;
}
