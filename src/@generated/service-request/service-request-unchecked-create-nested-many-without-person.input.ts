import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutPersonInput } from './service-request-create-without-person.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateOrConnectWithoutPersonInput } from './service-request-create-or-connect-without-person.input';
import { ServiceRequestCreateManyPersonInputEnvelope } from './service-request-create-many-person-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';

@InputType()
export class ServiceRequestUncheckedCreateNestedManyWithoutPersonInput {

    @Field(() => [ServiceRequestCreateWithoutPersonInput], {nullable:true})
    @Type(() => ServiceRequestCreateWithoutPersonInput)
    create?: Array<ServiceRequestCreateWithoutPersonInput>;

    @Field(() => [ServiceRequestCreateOrConnectWithoutPersonInput], {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutPersonInput)
    connectOrCreate?: Array<ServiceRequestCreateOrConnectWithoutPersonInput>;

    @Field(() => ServiceRequestCreateManyPersonInputEnvelope, {nullable:true})
    @Type(() => ServiceRequestCreateManyPersonInputEnvelope)
    createMany?: ServiceRequestCreateManyPersonInputEnvelope;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;
}
