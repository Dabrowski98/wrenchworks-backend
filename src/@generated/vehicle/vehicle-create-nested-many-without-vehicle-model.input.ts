import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutVehicleModelInput } from './vehicle-create-without-vehicle-model.input';
import { Type } from 'class-transformer';
import { VehicleCreateOrConnectWithoutVehicleModelInput } from './vehicle-create-or-connect-without-vehicle-model.input';
import { VehicleCreateManyVehicleModelInputEnvelope } from './vehicle-create-many-vehicle-model-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@InputType()
export class VehicleCreateNestedManyWithoutVehicleModelInput {

    @Field(() => [VehicleCreateWithoutVehicleModelInput], {nullable:true})
    @Type(() => VehicleCreateWithoutVehicleModelInput)
    create?: Array<VehicleCreateWithoutVehicleModelInput>;

    @Field(() => [VehicleCreateOrConnectWithoutVehicleModelInput], {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutVehicleModelInput)
    connectOrCreate?: Array<VehicleCreateOrConnectWithoutVehicleModelInput>;

    @Field(() => VehicleCreateManyVehicleModelInputEnvelope, {nullable:true})
    @Type(() => VehicleCreateManyVehicleModelInputEnvelope)
    createMany?: VehicleCreateManyVehicleModelInputEnvelope;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>>;
}
