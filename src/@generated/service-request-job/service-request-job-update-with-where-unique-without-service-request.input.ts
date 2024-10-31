import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestJobWhereUniqueInput } from './service-request-job-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestJobUpdateWithoutServiceRequestInput } from './service-request-job-update-without-service-request.input';

@InputType()
export class ServiceRequestJobUpdateWithWhereUniqueWithoutServiceRequestInput {

    @Field(() => ServiceRequestJobWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestJobWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestJobWhereUniqueInput, 'serviceRequestId_jobId'>;

    @Field(() => ServiceRequestJobUpdateWithoutServiceRequestInput, {nullable:false})
    @Type(() => ServiceRequestJobUpdateWithoutServiceRequestInput)
    data!: ServiceRequestJobUpdateWithoutServiceRequestInput;
}
