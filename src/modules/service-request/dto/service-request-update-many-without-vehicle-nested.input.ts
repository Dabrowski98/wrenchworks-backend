import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutVehicleInput } from './service-request-create-without-vehicle.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateOrConnectWithoutVehicleInput } from './service-request-create-or-connect-without-vehicle.input';
import { ServiceRequestUpsertWithWhereUniqueWithoutVehicleInput } from './service-request-upsert-with-where-unique-without-vehicle.input';
import { ServiceRequestCreateManyVehicleInputEnvelope } from './service-request-create-many-vehicle-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { ServiceRequestUpdateWithWhereUniqueWithoutVehicleInput } from './service-request-update-with-where-unique-without-vehicle.input';
import { ServiceRequestUpdateManyWithWhereWithoutVehicleInput } from './service-request-update-many-with-where-without-vehicle.input';
import { ServiceRequestScalarWhereInput } from './service-request-scalar-where.input';

@InputType()
export class ServiceRequestUpdateManyWithoutVehicleNestedInput {

    @Field(() => [ServiceRequestCreateWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceRequestCreateWithoutVehicleInput)
    create?: Array<ServiceRequestCreateWithoutVehicleInput>;

    @Field(() => [ServiceRequestCreateOrConnectWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutVehicleInput)
    connectOrCreate?: Array<ServiceRequestCreateOrConnectWithoutVehicleInput>;

    @Field(() => [ServiceRequestUpsertWithWhereUniqueWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceRequestUpsertWithWhereUniqueWithoutVehicleInput)
    upsert?: Array<ServiceRequestUpsertWithWhereUniqueWithoutVehicleInput>;

    @Field(() => ServiceRequestCreateManyVehicleInputEnvelope, {nullable:true})
    @Type(() => ServiceRequestCreateManyVehicleInputEnvelope)
    createMany?: ServiceRequestCreateManyVehicleInputEnvelope;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestUpdateWithWhereUniqueWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceRequestUpdateWithWhereUniqueWithoutVehicleInput)
    update?: Array<ServiceRequestUpdateWithWhereUniqueWithoutVehicleInput>;

    @Field(() => [ServiceRequestUpdateManyWithWhereWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceRequestUpdateManyWithWhereWithoutVehicleInput)
    updateMany?: Array<ServiceRequestUpdateManyWithWhereWithoutVehicleInput>;

    @Field(() => [ServiceRequestScalarWhereInput], {nullable:true})
    @Type(() => ServiceRequestScalarWhereInput)
    deleteMany?: Array<ServiceRequestScalarWhereInput>;
}
