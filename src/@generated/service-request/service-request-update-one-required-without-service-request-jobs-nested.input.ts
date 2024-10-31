import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutServiceRequestJobsInput } from './service-request-create-without-service-request-jobs.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateOrConnectWithoutServiceRequestJobsInput } from './service-request-create-or-connect-without-service-request-jobs.input';
import { ServiceRequestUpsertWithoutServiceRequestJobsInput } from './service-request-upsert-without-service-request-jobs.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { ServiceRequestUpdateToOneWithWhereWithoutServiceRequestJobsInput } from './service-request-update-to-one-with-where-without-service-request-jobs.input';

@InputType()
export class ServiceRequestUpdateOneRequiredWithoutServiceRequestJobsNestedInput {

    @Field(() => ServiceRequestCreateWithoutServiceRequestJobsInput, {nullable:true})
    @Type(() => ServiceRequestCreateWithoutServiceRequestJobsInput)
    create?: ServiceRequestCreateWithoutServiceRequestJobsInput;

    @Field(() => ServiceRequestCreateOrConnectWithoutServiceRequestJobsInput, {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutServiceRequestJobsInput)
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutServiceRequestJobsInput;

    @Field(() => ServiceRequestUpsertWithoutServiceRequestJobsInput, {nullable:true})
    @Type(() => ServiceRequestUpsertWithoutServiceRequestJobsInput)
    upsert?: ServiceRequestUpsertWithoutServiceRequestJobsInput;

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestUpdateToOneWithWhereWithoutServiceRequestJobsInput, {nullable:true})
    @Type(() => ServiceRequestUpdateToOneWithWhereWithoutServiceRequestJobsInput)
    update?: ServiceRequestUpdateToOneWithWhereWithoutServiceRequestJobsInput;
}
