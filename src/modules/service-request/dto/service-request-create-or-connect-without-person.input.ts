import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateWithoutPersonInput } from './service-request-create-without-person.input';

@InputType()
export class ServiceRequestCreateOrConnectWithoutPersonInput {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestCreateWithoutPersonInput, {nullable:false})
    @Type(() => ServiceRequestCreateWithoutPersonInput)
    create!: ServiceRequestCreateWithoutPersonInput;
}
