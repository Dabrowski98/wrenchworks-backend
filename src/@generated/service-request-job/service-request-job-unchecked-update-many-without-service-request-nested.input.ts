import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestJobCreateWithoutServiceRequestInput } from './service-request-job-create-without-service-request.input';
import { Type } from 'class-transformer';
import { ServiceRequestJobCreateOrConnectWithoutServiceRequestInput } from './service-request-job-create-or-connect-without-service-request.input';
import { ServiceRequestJobUpsertWithWhereUniqueWithoutServiceRequestInput } from './service-request-job-upsert-with-where-unique-without-service-request.input';
import { ServiceRequestJobCreateManyServiceRequestInputEnvelope } from './service-request-job-create-many-service-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestJobWhereUniqueInput } from './service-request-job-where-unique.input';
import { ServiceRequestJobUpdateWithWhereUniqueWithoutServiceRequestInput } from './service-request-job-update-with-where-unique-without-service-request.input';
import { ServiceRequestJobUpdateManyWithWhereWithoutServiceRequestInput } from './service-request-job-update-many-with-where-without-service-request.input';
import { ServiceRequestJobScalarWhereInput } from './service-request-job-scalar-where.input';

@InputType()
export class ServiceRequestJobUncheckedUpdateManyWithoutServiceRequestNestedInput {

    @Field(() => [ServiceRequestJobCreateWithoutServiceRequestInput], {nullable:true})
    @Type(() => ServiceRequestJobCreateWithoutServiceRequestInput)
    create?: Array<ServiceRequestJobCreateWithoutServiceRequestInput>;

    @Field(() => [ServiceRequestJobCreateOrConnectWithoutServiceRequestInput], {nullable:true})
    @Type(() => ServiceRequestJobCreateOrConnectWithoutServiceRequestInput)
    connectOrCreate?: Array<ServiceRequestJobCreateOrConnectWithoutServiceRequestInput>;

    @Field(() => [ServiceRequestJobUpsertWithWhereUniqueWithoutServiceRequestInput], {nullable:true})
    @Type(() => ServiceRequestJobUpsertWithWhereUniqueWithoutServiceRequestInput)
    upsert?: Array<ServiceRequestJobUpsertWithWhereUniqueWithoutServiceRequestInput>;

    @Field(() => ServiceRequestJobCreateManyServiceRequestInputEnvelope, {nullable:true})
    @Type(() => ServiceRequestJobCreateManyServiceRequestInputEnvelope)
    createMany?: ServiceRequestJobCreateManyServiceRequestInputEnvelope;

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

    @Field(() => [ServiceRequestJobUpdateWithWhereUniqueWithoutServiceRequestInput], {nullable:true})
    @Type(() => ServiceRequestJobUpdateWithWhereUniqueWithoutServiceRequestInput)
    update?: Array<ServiceRequestJobUpdateWithWhereUniqueWithoutServiceRequestInput>;

    @Field(() => [ServiceRequestJobUpdateManyWithWhereWithoutServiceRequestInput], {nullable:true})
    @Type(() => ServiceRequestJobUpdateManyWithWhereWithoutServiceRequestInput)
    updateMany?: Array<ServiceRequestJobUpdateManyWithWhereWithoutServiceRequestInput>;

    @Field(() => [ServiceRequestJobScalarWhereInput], {nullable:true})
    @Type(() => ServiceRequestJobScalarWhereInput)
    deleteMany?: Array<ServiceRequestJobScalarWhereInput>;
}
