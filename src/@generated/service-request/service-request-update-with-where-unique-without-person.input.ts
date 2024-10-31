import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateWithoutPersonInput } from './service-request-update-without-person.input';

@InputType()
export class ServiceRequestUpdateWithWhereUniqueWithoutPersonInput {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestUpdateWithoutPersonInput, {nullable:false})
    @Type(() => ServiceRequestUpdateWithoutPersonInput)
    data!: ServiceRequestUpdateWithoutPersonInput;
}
