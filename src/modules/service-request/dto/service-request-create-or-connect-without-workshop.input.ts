import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateWithoutWorkshopInput } from './service-request-create-without-workshop.input';

@InputType()
export class ServiceRequestCreateOrConnectWithoutWorkshopInput {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => ServiceRequestCreateWithoutWorkshopInput)
    create!: ServiceRequestCreateWithoutWorkshopInput;
}
