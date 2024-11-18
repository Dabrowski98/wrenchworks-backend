import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestUpdateInput } from './service-request-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneServiceRequestArgs {

    @Field(() => ServiceRequestUpdateInput, {nullable:false})
    @Type(() => ServiceRequestUpdateInput)
    @Validator.ValidateNested()
    data!: ServiceRequestUpdateInput;

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>;
}
