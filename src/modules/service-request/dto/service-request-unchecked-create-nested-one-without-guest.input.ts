import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutGuestInput } from './service-request-create-without-guest.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestCreateOrConnectWithoutGuestInput } from './service-request-create-or-connect-without-guest.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';

@InputType()
export class ServiceRequestUncheckedCreateNestedOneWithoutGuestInput {

    @Field(() => ServiceRequestCreateWithoutGuestInput, {nullable:true})
    @Type(() => ServiceRequestCreateWithoutGuestInput)
    @ValidateNested()
    create?: ServiceRequestCreateWithoutGuestInput;

    @Field(() => ServiceRequestCreateOrConnectWithoutGuestInput, {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutGuestInput)
    @ValidateNested()
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutGuestInput;

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>;
}
