import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateWithoutWorkshopInput } from './service-request-update-without-workshop.input';

@InputType()
export class ServiceRequestUpdateWithWhereUniqueWithoutWorkshopInput {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => ServiceRequestUpdateWithoutWorkshopInput)
    data!: ServiceRequestUpdateWithoutWorkshopInput;
}