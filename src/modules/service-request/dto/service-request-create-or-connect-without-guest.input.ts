import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateWithoutGuestInput } from './service-request-create-without-guest.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class ServiceRequestCreateOrConnectWithoutGuestInput {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestCreateWithoutGuestInput, {nullable:false})
    @Type(() => ServiceRequestCreateWithoutGuestInput)
    @ValidateNested()
    create!: ServiceRequestCreateWithoutGuestInput;
}
