import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateWithoutVehicleInput } from './service-request-update-without-vehicle.input';

@InputType()
export class ServiceRequestUpdateWithWhereUniqueWithoutVehicleInput {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestUpdateWithoutVehicleInput, {nullable:false})
    @Type(() => ServiceRequestUpdateWithoutVehicleInput)
    data!: ServiceRequestUpdateWithoutVehicleInput;
}
