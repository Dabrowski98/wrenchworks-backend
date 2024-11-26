import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutGuestInput } from './service-request-create-without-guest.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestCreateOrConnectWithoutGuestInput } from './service-request-create-or-connect-without-guest.input';
import { ServiceRequestUpsertWithoutGuestInput } from './service-request-upsert-without-guest.input';
import { ServiceRequestWhereInput } from './service-request-where.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { ServiceRequestUpdateToOneWithWhereWithoutGuestInput } from './service-request-update-to-one-with-where-without-guest.input';

@InputType()
export class ServiceRequestUpdateOneWithoutGuestNestedInput {

    @Field(() => ServiceRequestCreateWithoutGuestInput, {nullable:true})
    @Type(() => ServiceRequestCreateWithoutGuestInput)
    @ValidateNested()
    create?: ServiceRequestCreateWithoutGuestInput;

    @Field(() => ServiceRequestCreateOrConnectWithoutGuestInput, {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutGuestInput)
    @ValidateNested()
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutGuestInput;

    @Field(() => ServiceRequestUpsertWithoutGuestInput, {nullable:true})
    @Type(() => ServiceRequestUpsertWithoutGuestInput)
    @ValidateNested()
    upsert?: ServiceRequestUpsertWithoutGuestInput;

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    @ValidateNested()
    disconnect?: ServiceRequestWhereInput;

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    @ValidateNested()
    delete?: ServiceRequestWhereInput;

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestUpdateToOneWithWhereWithoutGuestInput, {nullable:true})
    @Type(() => ServiceRequestUpdateToOneWithWhereWithoutGuestInput)
    @ValidateNested()
    update?: ServiceRequestUpdateToOneWithWhereWithoutGuestInput;
}
