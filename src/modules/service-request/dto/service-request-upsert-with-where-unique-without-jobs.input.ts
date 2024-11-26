import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateWithoutJobsInput } from './service-request-update-without-jobs.input';
import { ValidateNested } from 'class-validator';
import { ServiceRequestCreateWithoutJobsInput } from './service-request-create-without-jobs.input';

@InputType()
export class ServiceRequestUpsertWithWhereUniqueWithoutJobsInput {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestUpdateWithoutJobsInput, {nullable:false})
    @Type(() => ServiceRequestUpdateWithoutJobsInput)
    @ValidateNested()
    update!: ServiceRequestUpdateWithoutJobsInput;

    @Field(() => ServiceRequestCreateWithoutJobsInput, {nullable:false})
    @Type(() => ServiceRequestCreateWithoutJobsInput)
    @ValidateNested()
    create!: ServiceRequestCreateWithoutJobsInput;
}
