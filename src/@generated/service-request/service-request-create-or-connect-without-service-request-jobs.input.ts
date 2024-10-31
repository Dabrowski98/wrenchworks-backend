import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateWithoutServiceRequestJobsInput } from './service-request-create-without-service-request-jobs.input';

@InputType()
export class ServiceRequestCreateOrConnectWithoutServiceRequestJobsInput {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestCreateWithoutServiceRequestJobsInput, {nullable:false})
    @Type(() => ServiceRequestCreateWithoutServiceRequestJobsInput)
    create!: ServiceRequestCreateWithoutServiceRequestJobsInput;
}
