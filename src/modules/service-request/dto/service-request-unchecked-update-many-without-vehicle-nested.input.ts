import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateWithoutVehicleInput } from './service-request-create-without-vehicle.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestCreateOrConnectWithoutVehicleInput } from './service-request-create-or-connect-without-vehicle.input';
import { ServiceRequestUpsertWithWhereUniqueWithoutVehicleInput } from './service-request-upsert-with-where-unique-without-vehicle.input';
import { ServiceRequestCreateManyVehicleInputEnvelope } from './service-request-create-many-vehicle-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { ServiceRequestUpdateWithWhereUniqueWithoutVehicleInput } from './service-request-update-with-where-unique-without-vehicle.input';
import { ServiceRequestUpdateManyWithWhereWithoutVehicleInput } from './service-request-update-many-with-where-without-vehicle.input';
import { ServiceRequestScalarWhereInput } from './service-request-scalar-where.input';

@InputType()
export class ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput {

    @Field(() => [ServiceRequestCreateWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceRequestCreateWithoutVehicleInput)
    @ValidateNested()
    create?: Array<ServiceRequestCreateWithoutVehicleInput>;

    @Field(() => [ServiceRequestCreateOrConnectWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceRequestCreateOrConnectWithoutVehicleInput)
    @ValidateNested()
    connectOrCreate?: Array<ServiceRequestCreateOrConnectWithoutVehicleInput>;

    @Field(() => [ServiceRequestUpsertWithWhereUniqueWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceRequestUpsertWithWhereUniqueWithoutVehicleInput)
    @ValidateNested()
    upsert?: Array<ServiceRequestUpsertWithWhereUniqueWithoutVehicleInput>;

    @Field(() => ServiceRequestCreateManyVehicleInputEnvelope, {nullable:true})
    @Type(() => ServiceRequestCreateManyVehicleInputEnvelope)
    @ValidateNested()
    createMany?: ServiceRequestCreateManyVehicleInputEnvelope;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestWhereUniqueInput], {nullable:true})
    @Type(() => ServiceRequestWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'guestId' | 'approvedServiceId'>>;

    @Field(() => [ServiceRequestUpdateWithWhereUniqueWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceRequestUpdateWithWhereUniqueWithoutVehicleInput)
    @ValidateNested()
    update?: Array<ServiceRequestUpdateWithWhereUniqueWithoutVehicleInput>;

    @Field(() => [ServiceRequestUpdateManyWithWhereWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceRequestUpdateManyWithWhereWithoutVehicleInput)
    @ValidateNested()
    updateMany?: Array<ServiceRequestUpdateManyWithWhereWithoutVehicleInput>;

    @Field(() => [ServiceRequestScalarWhereInput], {nullable:true})
    @Type(() => ServiceRequestScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<ServiceRequestScalarWhereInput>;
}
