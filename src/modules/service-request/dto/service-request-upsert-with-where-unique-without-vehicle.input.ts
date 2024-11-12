import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateWithoutVehicleInput } from './service-request-update-without-vehicle.input';
import { ServiceRequestCreateWithoutVehicleInput } from './service-request-create-without-vehicle.input';

@InputType()
export class ServiceRequestUpsertWithWhereUniqueWithoutVehicleInput {

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:false})
    @Type(() => ServiceRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>;

    @Field(() => ServiceRequestUpdateWithoutVehicleInput, {nullable:false})
    @Type(() => ServiceRequestUpdateWithoutVehicleInput)
    update!: ServiceRequestUpdateWithoutVehicleInput;

    @Field(() => ServiceRequestCreateWithoutVehicleInput, {nullable:false})
    @Type(() => ServiceRequestCreateWithoutVehicleInput)
    create!: ServiceRequestCreateWithoutVehicleInput;
}
