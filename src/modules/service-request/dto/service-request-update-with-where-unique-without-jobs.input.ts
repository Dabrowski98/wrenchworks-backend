import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateWithoutJobsInput } from './service-request-update-without-jobs.input';

@InputType()
export class ServiceRequestUpdateWithWhereUniqueWithoutJobsInput {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestUpdateWithoutJobsInput, {nullable:false})
    @Type(() => ServiceRequestUpdateWithoutJobsInput)
    data!: ServiceRequestUpdateWithoutJobsInput;
}
