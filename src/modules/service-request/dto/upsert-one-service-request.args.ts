import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateInput } from './service-request-create.input';
import { ServiceRequestUpdateInput } from './service-request-update.input';

@ArgsType()
export class UpsertOneServiceRequestArgs {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestCreateInput, {nullable:false})
    @Type(() => ServiceRequestCreateInput)
    create!: ServiceRequestCreateInput;

    @Field(() => ServiceRequestUpdateInput, {nullable:false})
    @Type(() => ServiceRequestUpdateInput)
    update!: ServiceRequestUpdateInput;
}
