import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestUpdateInput } from './service-request-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';

@ArgsType()
export class UpdateOneServiceRequestArgs {

    @Field(() => ServiceRequestUpdateInput, {nullable:false})
    @Type(() => ServiceRequestUpdateInput)
    data!: ServiceRequestUpdateInput;

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>;
}
