import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutVehicleModelInput } from './vehicle-create-without-vehicle-model.input';
import { Type } from 'class-transformer';
import { VehicleCreateOrConnectWithoutVehicleModelInput } from './vehicle-create-or-connect-without-vehicle-model.input';
import { VehicleUpsertWithWhereUniqueWithoutVehicleModelInput } from './vehicle-upsert-with-where-unique-without-vehicle-model.input';
import { VehicleCreateManyVehicleModelInputEnvelope } from './vehicle-create-many-vehicle-model-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleUpdateWithWhereUniqueWithoutVehicleModelInput } from './vehicle-update-with-where-unique-without-vehicle-model.input';
import { VehicleUpdateManyWithWhereWithoutVehicleModelInput } from './vehicle-update-many-with-where-without-vehicle-model.input';
import { VehicleScalarWhereInput } from './vehicle-scalar-where.input';

@InputType()
export class VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput {

    @Field(() => [VehicleCreateWithoutVehicleModelInput], {nullable:true})
    @Type(() => VehicleCreateWithoutVehicleModelInput)
    create?: Array<VehicleCreateWithoutVehicleModelInput>;

    @Field(() => [VehicleCreateOrConnectWithoutVehicleModelInput], {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutVehicleModelInput)
    connectOrCreate?: Array<VehicleCreateOrConnectWithoutVehicleModelInput>;

    @Field(() => [VehicleUpsertWithWhereUniqueWithoutVehicleModelInput], {nullable:true})
    @Type(() => VehicleUpsertWithWhereUniqueWithoutVehicleModelInput)
    upsert?: Array<VehicleUpsertWithWhereUniqueWithoutVehicleModelInput>;

    @Field(() => VehicleCreateManyVehicleModelInputEnvelope, {nullable:true})
    @Type(() => VehicleCreateManyVehicleModelInputEnvelope)
    createMany?: VehicleCreateManyVehicleModelInputEnvelope;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>>;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>>;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>>;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>>;

    @Field(() => [VehicleUpdateWithWhereUniqueWithoutVehicleModelInput], {nullable:true})
    @Type(() => VehicleUpdateWithWhereUniqueWithoutVehicleModelInput)
    update?: Array<VehicleUpdateWithWhereUniqueWithoutVehicleModelInput>;

    @Field(() => [VehicleUpdateManyWithWhereWithoutVehicleModelInput], {nullable:true})
    @Type(() => VehicleUpdateManyWithWhereWithoutVehicleModelInput)
    updateMany?: Array<VehicleUpdateManyWithWhereWithoutVehicleModelInput>;

    @Field(() => [VehicleScalarWhereInput], {nullable:true})
    @Type(() => VehicleScalarWhereInput)
    deleteMany?: Array<VehicleScalarWhereInput>;
}
