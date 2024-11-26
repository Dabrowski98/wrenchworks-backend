import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateWithoutApprovedServiceInput } from './service-request-create-without-approved-service.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class ServiceRequestCreateOrConnectWithoutApprovedServiceInput {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestCreateWithoutApprovedServiceInput, {nullable:false})
    @Type(() => ServiceRequestCreateWithoutApprovedServiceInput)
    @ValidateNested()
    create!: ServiceRequestCreateWithoutApprovedServiceInput;
}
