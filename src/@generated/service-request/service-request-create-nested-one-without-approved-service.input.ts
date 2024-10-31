import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutApprovedServiceInput } from './service-request-create-without-approved-service.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateOrConnectWithoutApprovedServiceInput } from './service-request-create-or-connect-without-approved-service.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';

@InputType()
export class ServiceRequestCreateNestedOneWithoutApprovedServiceInput {

    @Field(() => ServiceRequestCreateWithoutApprovedServiceInput, {nullable:true})
    @Type(() => ServiceRequestCreateWithoutApprovedServiceInput)
    create?: ServiceRequestCreateWithoutApprovedServiceInput;

    @Field(() => ServiceRequestCreateOrConnectWithoutApprovedServiceInput, {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutApprovedServiceInput)
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutApprovedServiceInput;

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>;
}
