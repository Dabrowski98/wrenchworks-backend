import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutApprovedServiceInput } from './service-request-create-without-approved-service.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestCreateOrConnectWithoutApprovedServiceInput } from './service-request-create-or-connect-without-approved-service.input';
import { ServiceRequestUpsertWithoutApprovedServiceInput } from './service-request-upsert-without-approved-service.input';
import { ServiceRequestWhereInput } from './service-request-where.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { ServiceRequestUpdateToOneWithWhereWithoutApprovedServiceInput } from './service-request-update-to-one-with-where-without-approved-service.input';

@InputType()
export class ServiceRequestUncheckedUpdateOneWithoutApprovedServiceNestedInput {

    @Field(() => ServiceRequestCreateWithoutApprovedServiceInput, {nullable:true})
    @Type(() => ServiceRequestCreateWithoutApprovedServiceInput)
    @ValidateNested()
    create?: ServiceRequestCreateWithoutApprovedServiceInput;

    @Field(() => ServiceRequestCreateOrConnectWithoutApprovedServiceInput, {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutApprovedServiceInput)
    @ValidateNested()
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutApprovedServiceInput;

    @Field(() => ServiceRequestUpsertWithoutApprovedServiceInput, {nullable:true})
    @Type(() => ServiceRequestUpsertWithoutApprovedServiceInput)
    @ValidateNested()
    upsert?: ServiceRequestUpsertWithoutApprovedServiceInput;

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    @ValidateNested()
    disconnect?: ServiceRequestWhereInput;

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    @ValidateNested()
    delete?: ServiceRequestWhereInput;

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestUpdateToOneWithWhereWithoutApprovedServiceInput, {nullable:true})
    @Type(() => ServiceRequestUpdateToOneWithWhereWithoutApprovedServiceInput)
    @ValidateNested()
    update?: ServiceRequestUpdateToOneWithWhereWithoutApprovedServiceInput;
}
