import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateWithoutWorkshopInput } from './service-request-update-without-workshop.input';
import { ValidateNested } from 'class-validator';
import { ServiceRequestCreateWithoutWorkshopInput } from './service-request-create-without-workshop.input';

@InputType()
export class ServiceRequestUpsertWithWhereUniqueWithoutWorkshopInput {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => ServiceRequestUpdateWithoutWorkshopInput)
    @ValidateNested()
    update!: ServiceRequestUpdateWithoutWorkshopInput;

    @Field(() => ServiceRequestCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => ServiceRequestCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: ServiceRequestCreateWithoutWorkshopInput;
}
