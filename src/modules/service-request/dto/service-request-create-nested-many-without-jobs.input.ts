import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutJobsInput } from './service-request-create-without-jobs.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestCreateOrConnectWithoutJobsInput } from './service-request-create-or-connect-without-jobs.input';
import { HideField } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';

@InputType()
export class ServiceRequestCreateNestedManyWithoutJobsInput {

    @Field(() => [ServiceRequestCreateWithoutJobsInput], {nullable:true})
    @Type(() => ServiceRequestCreateWithoutJobsInput)
    @ValidateNested()
    create?: Array<ServiceRequestCreateWithoutJobsInput>;

    @HideField()
    connectOrCreate?: Array<ServiceRequestCreateOrConnectWithoutJobsInput>;

    @HideField()
    connect?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>>;
}
