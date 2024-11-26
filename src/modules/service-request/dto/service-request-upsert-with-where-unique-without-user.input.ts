import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateWithoutUserInput } from './service-request-update-without-user.input';
import { ValidateNested } from 'class-validator';
import { ServiceRequestCreateWithoutUserInput } from './service-request-create-without-user.input';

@InputType()
export class ServiceRequestUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestUpdateWithoutUserInput, {nullable:false})
    @Type(() => ServiceRequestUpdateWithoutUserInput)
    @ValidateNested()
    update!: ServiceRequestUpdateWithoutUserInput;

    @Field(() => ServiceRequestCreateWithoutUserInput, {nullable:false})
    @Type(() => ServiceRequestCreateWithoutUserInput)
    @ValidateNested()
    create!: ServiceRequestCreateWithoutUserInput;
}
