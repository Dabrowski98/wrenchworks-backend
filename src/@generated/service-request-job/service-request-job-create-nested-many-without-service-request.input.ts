import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestJobCreateWithoutServiceRequestInput } from './service-request-job-create-without-service-request.input';
import { Type } from 'class-transformer';
import { ServiceRequestJobCreateOrConnectWithoutServiceRequestInput } from './service-request-job-create-or-connect-without-service-request.input';
import { ServiceRequestJobCreateManyServiceRequestInputEnvelope } from './service-request-job-create-many-service-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestJobWhereUniqueInput } from './service-request-job-where-unique.input';

@InputType()
export class ServiceRequestJobCreateNestedManyWithoutServiceRequestInput {

    @Field(() => [ServiceRequestJobCreateWithoutServiceRequestInput], {nullable:true})
    @Type(() => ServiceRequestJobCreateWithoutServiceRequestInput)
    create?: Array<ServiceRequestJobCreateWithoutServiceRequestInput>;

    @Field(() => [ServiceRequestJobCreateOrConnectWithoutServiceRequestInput], {nullable:true})
    @Type(() => ServiceRequestJobCreateOrConnectWithoutServiceRequestInput)
    connectOrCreate?: Array<ServiceRequestJobCreateOrConnectWithoutServiceRequestInput>;

    @Field(() => ServiceRequestJobCreateManyServiceRequestInputEnvelope, {nullable:true})
    @Type(() => ServiceRequestJobCreateManyServiceRequestInputEnvelope)
    createMany?: ServiceRequestJobCreateManyServiceRequestInputEnvelope;

    @Field(() => [ServiceRequestJobWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestJobWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceRequestJobWhereUniqueInput, 'serviceRequestId_jobId'>>;
}
