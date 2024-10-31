import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateWithoutPersonInput } from './service-request-update-without-person.input';
import { ServiceRequestCreateWithoutPersonInput } from './service-request-create-without-person.input';

@InputType()
export class ServiceRequestUpsertWithWhereUniqueWithoutPersonInput {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestUpdateWithoutPersonInput, {nullable:false})
    @Type(() => ServiceRequestUpdateWithoutPersonInput)
    update!: ServiceRequestUpdateWithoutPersonInput;

    @Field(() => ServiceRequestCreateWithoutPersonInput, {nullable:false})
    @Type(() => ServiceRequestCreateWithoutPersonInput)
    create!: ServiceRequestCreateWithoutPersonInput;
}
