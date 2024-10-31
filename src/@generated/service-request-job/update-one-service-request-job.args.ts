import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestJobUpdateInput } from './service-request-job-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ServiceRequestJobWhereUniqueInput } from './service-request-job-where-unique.input';

@ArgsType()
export class UpdateOneServiceRequestJobArgs {

    @Field(() => ServiceRequestJobUpdateInput, {nullable:false})
    @Type(() => ServiceRequestJobUpdateInput)
    data!: ServiceRequestJobUpdateInput;

    @Field(() => ServiceRequestJobWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestJobWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestJobWhereUniqueInput, 'serviceRequestId_jobId'>;
}
