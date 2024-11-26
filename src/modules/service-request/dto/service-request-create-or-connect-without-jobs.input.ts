import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateWithoutJobsInput } from './service-request-create-without-jobs.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class ServiceRequestCreateOrConnectWithoutJobsInput {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestCreateWithoutJobsInput, {nullable:false})
    @Type(() => ServiceRequestCreateWithoutJobsInput)
    @ValidateNested()
    create!: ServiceRequestCreateWithoutJobsInput;
}
