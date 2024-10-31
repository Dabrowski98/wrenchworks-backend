import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutVehicleBrandInput } from './vehicle-create-without-vehicle-brand.input';
import { Type } from 'class-transformer';
import { VehicleCreateOrConnectWithoutVehicleBrandInput } from './vehicle-create-or-connect-without-vehicle-brand.input';
import { VehicleUpsertWithWhereUniqueWithoutVehicleBrandInput } from './vehicle-upsert-with-where-unique-without-vehicle-brand.input';
import { VehicleCreateManyVehicleBrandInputEnvelope } from './vehicle-create-many-vehicle-brand-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleUpdateWithWhereUniqueWithoutVehicleBrandInput } from './vehicle-update-with-where-unique-without-vehicle-brand.input';
import { VehicleUpdateManyWithWhereWithoutVehicleBrandInput } from './vehicle-update-many-with-where-without-vehicle-brand.input';
import { VehicleScalarWhereInput } from './vehicle-scalar-where.input';

@InputType()
export class VehicleUncheckedUpdateManyWithoutVehicleBrandNestedInput {

    @Field(() => [VehicleCreateWithoutVehicleBrandInput], {nullable:true})
    @Type(() => VehicleCreateWithoutVehicleBrandInput)
    create?: Array<VehicleCreateWithoutVehicleBrandInput>;

    @Field(() => [VehicleCreateOrConnectWithoutVehicleBrandInput], {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutVehicleBrandInput)
    connectOrCreate?: Array<VehicleCreateOrConnectWithoutVehicleBrandInput>;

    @Field(() => [VehicleUpsertWithWhereUniqueWithoutVehicleBrandInput], {nullable:true})
    @Type(() => VehicleUpsertWithWhereUniqueWithoutVehicleBrandInput)
    upsert?: Array<VehicleUpsertWithWhereUniqueWithoutVehicleBrandInput>;

    @Field(() => VehicleCreateManyVehicleBrandInputEnvelope, {nullable:true})
    @Type(() => VehicleCreateManyVehicleBrandInputEnvelope)
    createMany?: VehicleCreateManyVehicleBrandInputEnvelope;

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

    @Field(() => [VehicleUpdateWithWhereUniqueWithoutVehicleBrandInput], {nullable:true})
    @Type(() => VehicleUpdateWithWhereUniqueWithoutVehicleBrandInput)
    update?: Array<VehicleUpdateWithWhereUniqueWithoutVehicleBrandInput>;

    @Field(() => [VehicleUpdateManyWithWhereWithoutVehicleBrandInput], {nullable:true})
    @Type(() => VehicleUpdateManyWithWhereWithoutVehicleBrandInput)
    updateMany?: Array<VehicleUpdateManyWithWhereWithoutVehicleBrandInput>;

    @Field(() => [VehicleScalarWhereInput], {nullable:true})
    @Type(() => VehicleScalarWhereInput)
    deleteMany?: Array<VehicleScalarWhereInput>;
}
