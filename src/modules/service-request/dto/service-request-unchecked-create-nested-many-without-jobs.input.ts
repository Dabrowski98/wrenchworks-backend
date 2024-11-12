import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutJobsInput } from './service-request-create-without-jobs.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateOrConnectWithoutJobsInput } from './service-request-create-or-connect-without-jobs.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';

@InputType()
export class ServiceRequestUncheckedCreateNestedManyWithoutJobsInput {

    @Field(() => [ServiceRequestCreateWithoutJobsInput], {nullable:true})
    @Type(() => ServiceRequestCreateWithoutJobsInput)
    create?: Array<ServiceRequestCreateWithoutJobsInput>;

    @Field(() => [ServiceRequestCreateOrConnectWithoutJobsInput], {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutJobsInput)
    connectOrCreate?: Array<ServiceRequestCreateOrConnectWithoutJobsInput>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;
}
