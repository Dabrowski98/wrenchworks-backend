import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutVehicleInput } from './service-create-without-vehicle.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutVehicleInput } from './service-create-or-connect-without-vehicle.input';
import { ServiceCreateManyVehicleInputEnvelope } from './service-create-many-vehicle-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';

@InputType()
export class ServiceUncheckedCreateNestedManyWithoutVehicleInput {

    @Field(() => [ServiceCreateWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceCreateWithoutVehicleInput)
    create?: Array<ServiceCreateWithoutVehicleInput>;

    @Field(() => [ServiceCreateOrConnectWithoutVehicleInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutVehicleInput)
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutVehicleInput>;

    @Field(() => ServiceCreateManyVehicleInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyVehicleInputEnvelope)
    createMany?: ServiceCreateManyVehicleInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;
}
