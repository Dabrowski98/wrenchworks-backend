import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutVehicleBrandInput } from './vehicle-create-without-vehicle-brand.input';
import { Type } from 'class-transformer';
import { VehicleCreateOrConnectWithoutVehicleBrandInput } from './vehicle-create-or-connect-without-vehicle-brand.input';
import { VehicleCreateManyVehicleBrandInputEnvelope } from './vehicle-create-many-vehicle-brand-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@InputType()
export class VehicleUncheckedCreateNestedManyWithoutVehicleBrandInput {

    @Field(() => [VehicleCreateWithoutVehicleBrandInput], {nullable:true})
    @Type(() => VehicleCreateWithoutVehicleBrandInput)
    create?: Array<VehicleCreateWithoutVehicleBrandInput>;

    @Field(() => [VehicleCreateOrConnectWithoutVehicleBrandInput], {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutVehicleBrandInput)
    connectOrCreate?: Array<VehicleCreateOrConnectWithoutVehicleBrandInput>;

    @Field(() => VehicleCreateManyVehicleBrandInputEnvelope, {nullable:true})
    @Type(() => VehicleCreateManyVehicleBrandInputEnvelope)
    createMany?: VehicleCreateManyVehicleBrandInputEnvelope;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>>;
}
