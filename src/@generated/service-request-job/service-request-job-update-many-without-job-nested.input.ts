import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestJobCreateWithoutJobInput } from './service-request-job-create-without-job.input';
import { Type } from 'class-transformer';
import { ServiceRequestJobCreateOrConnectWithoutJobInput } from './service-request-job-create-or-connect-without-job.input';
import { ServiceRequestJobUpsertWithWhereUniqueWithoutJobInput } from './service-request-job-upsert-with-where-unique-without-job.input';
import { ServiceRequestJobCreateManyJobInputEnvelope } from './service-request-job-create-many-job-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestJobWhereUniqueInput } from './service-request-job-where-unique.input';
import { ServiceRequestJobUpdateWithWhereUniqueWithoutJobInput } from './service-request-job-update-with-where-unique-without-job.input';
import { ServiceRequestJobUpdateManyWithWhereWithoutJobInput } from './service-request-job-update-many-with-where-without-job.input';
import { ServiceRequestJobScalarWhereInput } from './service-request-job-scalar-where.input';

@InputType()
export class ServiceRequestJobUpdateManyWithoutJobNestedInput {

    @Field(() => [ServiceRequestJobCreateWithoutJobInput], {nullable:true})
    @Type(() => ServiceRequestJobCreateWithoutJobInput)
    create?: Array<ServiceRequestJobCreateWithoutJobInput>;

    @Field(() => [ServiceRequestJobCreateOrConnectWithoutJobInput], {nullable:true})
    @Type(() => ServiceRequestJobCreateOrConnectWithoutJobInput)
    connectOrCreate?: Array<ServiceRequestJobCreateOrConnectWithoutJobInput>;

    @Field(() => [ServiceRequestJobUpsertWithWhereUniqueWithoutJobInput], {nullable:true})
    @Type(() => ServiceRequestJobUpsertWithWhereUniqueWithoutJobInput)
    upsert?: Array<ServiceRequestJobUpsertWithWhereUniqueWithoutJobInput>;

    @Field(() => ServiceRequestJobCreateManyJobInputEnvelope, {nullable:true})
    @Type(() => ServiceRequestJobCreateManyJobInputEnvelope)
    createMany?: ServiceRequestJobCreateManyJobInputEnvelope;

    @Field(() => [ServiceRequestJobWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestJobWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ServiceRequestJobWhereUniqueInput, 'serviceRequestId_jobId'>>;

    @Field(() => [ServiceRequestJobWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestJobWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ServiceRequestJobWhereUniqueInput, 'serviceRequestId_jobId'>>;

    @Field(() => [ServiceRequestJobWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestJobWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ServiceRequestJobWhereUniqueInput, 'serviceRequestId_jobId'>>;

    @Field(() => [ServiceRequestJobWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestJobWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceRequestJobWhereUniqueInput, 'serviceRequestId_jobId'>>;

    @Field(() => [ServiceRequestJobUpdateWithWhereUniqueWithoutJobInput], {nullable:true})
    @Type(() => ServiceRequestJobUpdateWithWhereUniqueWithoutJobInput)
    update?: Array<ServiceRequestJobUpdateWithWhereUniqueWithoutJobInput>;

    @Field(() => [ServiceRequestJobUpdateManyWithWhereWithoutJobInput], {nullable:true})
    @Type(() => ServiceRequestJobUpdateManyWithWhereWithoutJobInput)
    updateMany?: Array<ServiceRequestJobUpdateManyWithWhereWithoutJobInput>;

    @Field(() => [ServiceRequestJobScalarWhereInput], {nullable:true})
    @Type(() => ServiceRequestJobScalarWhereInput)
    deleteMany?: Array<ServiceRequestJobScalarWhereInput>;
}
