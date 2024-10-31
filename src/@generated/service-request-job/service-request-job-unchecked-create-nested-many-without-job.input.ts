import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestJobCreateWithoutJobInput } from './service-request-job-create-without-job.input';
import { Type } from 'class-transformer';
import { ServiceRequestJobCreateOrConnectWithoutJobInput } from './service-request-job-create-or-connect-without-job.input';
import { ServiceRequestJobCreateManyJobInputEnvelope } from './service-request-job-create-many-job-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestJobWhereUniqueInput } from './service-request-job-where-unique.input';

@InputType()
export class ServiceRequestJobUncheckedCreateNestedManyWithoutJobInput {

    @Field(() => [ServiceRequestJobCreateWithoutJobInput], {nullable:true})
    @Type(() => ServiceRequestJobCreateWithoutJobInput)
    create?: Array<ServiceRequestJobCreateWithoutJobInput>;

    @Field(() => [ServiceRequestJobCreateOrConnectWithoutJobInput], {nullable:true})
    @Type(() => ServiceRequestJobCreateOrConnectWithoutJobInput)
    connectOrCreate?: Array<ServiceRequestJobCreateOrConnectWithoutJobInput>;

    @Field(() => ServiceRequestJobCreateManyJobInputEnvelope, {nullable:true})
    @Type(() => ServiceRequestJobCreateManyJobInputEnvelope)
    createMany?: ServiceRequestJobCreateManyJobInputEnvelope;

    @Field(() => [ServiceRequestJobWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestJobWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceRequestJobWhereUniqueInput, 'serviceRequestId_jobId'>>;
}
