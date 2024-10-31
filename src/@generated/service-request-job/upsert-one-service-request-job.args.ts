import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestJobWhereUniqueInput } from './service-request-job-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestJobCreateInput } from './service-request-job-create.input';
import { ServiceRequestJobUpdateInput } from './service-request-job-update.input';

@ArgsType()
export class UpsertOneServiceRequestJobArgs {

    @Field(() => ServiceRequestJobWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestJobWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestJobWhereUniqueInput, 'serviceRequestId_jobId'>;

    @Field(() => ServiceRequestJobCreateInput, {nullable:false})
    @Type(() => ServiceRequestJobCreateInput)
    create!: ServiceRequestJobCreateInput;

    @Field(() => ServiceRequestJobUpdateInput, {nullable:false})
    @Type(() => ServiceRequestJobUpdateInput)
    update!: ServiceRequestJobUpdateInput;
}
