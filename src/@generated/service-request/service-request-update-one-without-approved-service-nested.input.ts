import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutApprovedServiceInput } from './service-request-create-without-approved-service.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateOrConnectWithoutApprovedServiceInput } from './service-request-create-or-connect-without-approved-service.input';
import { ServiceRequestUpsertWithoutApprovedServiceInput } from './service-request-upsert-without-approved-service.input';
import { ServiceRequestWhereInput } from './service-request-where.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { ServiceRequestUpdateToOneWithWhereWithoutApprovedServiceInput } from './service-request-update-to-one-with-where-without-approved-service.input';

@InputType()
export class ServiceRequestUpdateOneWithoutApprovedServiceNestedInput {

    @Field(() => ServiceRequestCreateWithoutApprovedServiceInput, {nullable:true})
    @Type(() => ServiceRequestCreateWithoutApprovedServiceInput)
    create?: ServiceRequestCreateWithoutApprovedServiceInput;

    @Field(() => ServiceRequestCreateOrConnectWithoutApprovedServiceInput, {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutApprovedServiceInput)
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutApprovedServiceInput;

    @Field(() => ServiceRequestUpsertWithoutApprovedServiceInput, {nullable:true})
    @Type(() => ServiceRequestUpsertWithoutApprovedServiceInput)
    upsert?: ServiceRequestUpsertWithoutApprovedServiceInput;

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    disconnect?: ServiceRequestWhereInput;

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    delete?: ServiceRequestWhereInput;

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestUpdateToOneWithWhereWithoutApprovedServiceInput, {nullable:true})
    @Type(() => ServiceRequestUpdateToOneWithWhereWithoutApprovedServiceInput)
    update?: ServiceRequestUpdateToOneWithWhereWithoutApprovedServiceInput;
}
