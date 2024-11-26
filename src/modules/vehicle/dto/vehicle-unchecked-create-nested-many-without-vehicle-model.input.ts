import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutVehicleModelInput } from './vehicle-create-without-vehicle-model.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateOrConnectWithoutVehicleModelInput } from './vehicle-create-or-connect-without-vehicle-model.input';
import { VehicleCreateManyVehicleModelInputEnvelope } from './vehicle-create-many-vehicle-model-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@InputType()
export class VehicleUncheckedCreateNestedManyWithoutVehicleModelInput {

    @Field(() => [VehicleCreateWithoutVehicleModelInput], {nullable:true})
    @Type(() => VehicleCreateWithoutVehicleModelInput)
    @ValidateNested()
    create?: Array<VehicleCreateWithoutVehicleModelInput>;

    @Field(() => [VehicleCreateOrConnectWithoutVehicleModelInput], {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutVehicleModelInput)
    @ValidateNested()
    connectOrCreate?: Array<VehicleCreateOrConnectWithoutVehicleModelInput>;

    @Field(() => VehicleCreateManyVehicleModelInputEnvelope, {nullable:true})
    @Type(() => VehicleCreateManyVehicleModelInputEnvelope)
    @ValidateNested()
    createMany?: VehicleCreateManyVehicleModelInputEnvelope;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>>;
}
