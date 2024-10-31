import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutVehicleInput } from './service-request-create-without-vehicle.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateOrConnectWithoutVehicleInput } from './service-request-create-or-connect-without-vehicle.input';
import { ServiceRequestCreateManyVehicleInputEnvelope } from './service-request-create-many-vehicle-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';

@InputType()
export class ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput {

    @Field(() => [ServiceRequestCreateWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceRequestCreateWithoutVehicleInput)
    create?: Array<ServiceRequestCreateWithoutVehicleInput>;

    @Field(() => [ServiceRequestCreateOrConnectWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutVehicleInput)
    connectOrCreate?: Array<ServiceRequestCreateOrConnectWithoutVehicleInput>;

    @Field(() => ServiceRequestCreateManyVehicleInputEnvelope, {nullable:true})
    @Type(() => ServiceRequestCreateManyVehicleInputEnvelope)
    createMany?: ServiceRequestCreateManyVehicleInputEnvelope;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;
}
