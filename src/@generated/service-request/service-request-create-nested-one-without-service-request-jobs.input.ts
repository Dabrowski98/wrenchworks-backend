import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutServiceRequestJobsInput } from './service-request-create-without-service-request-jobs.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateOrConnectWithoutServiceRequestJobsInput } from './service-request-create-or-connect-without-service-request-jobs.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';

@InputType()
export class ServiceRequestCreateNestedOneWithoutServiceRequestJobsInput {

    @Field(() => ServiceRequestCreateWithoutServiceRequestJobsInput, {nullable:true})
    @Type(() => ServiceRequestCreateWithoutServiceRequestJobsInput)
    create?: ServiceRequestCreateWithoutServiceRequestJobsInput;

    @Field(() => ServiceRequestCreateOrConnectWithoutServiceRequestJobsInput, {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutServiceRequestJobsInput)
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutServiceRequestJobsInput;

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>;
}
