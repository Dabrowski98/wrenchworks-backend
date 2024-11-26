import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutVehicleModelInput } from './vehicle-create-without-vehicle-model.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateOrConnectWithoutVehicleModelInput } from './vehicle-create-or-connect-without-vehicle-model.input';
import { VehicleUpsertWithWhereUniqueWithoutVehicleModelInput } from './vehicle-upsert-with-where-unique-without-vehicle-model.input';
import { VehicleCreateManyVehicleModelInputEnvelope } from './vehicle-create-many-vehicle-model-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleUpdateWithWhereUniqueWithoutVehicleModelInput } from './vehicle-update-with-where-unique-without-vehicle-model.input';
import { VehicleUpdateManyWithWhereWithoutVehicleModelInput } from './vehicle-update-many-with-where-without-vehicle-model.input';
import { VehicleScalarWhereInput } from './vehicle-scalar-where.input';

@InputType()
export class VehicleUpdateManyWithoutVehicleModelNestedInput {

    @Field(() => [VehicleCreateWithoutVehicleModelInput], {nullable:true})
    @Type(() => VehicleCreateWithoutVehicleModelInput)
    @ValidateNested()
    create?: Array<VehicleCreateWithoutVehicleModelInput>;

    @Field(() => [VehicleCreateOrConnectWithoutVehicleModelInput], {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutVehicleModelInput)
    @ValidateNested()
    connectOrCreate?: Array<VehicleCreateOrConnectWithoutVehicleModelInput>;

    @Field(() => [VehicleUpsertWithWhereUniqueWithoutVehicleModelInput], {nullable:true})
    @Type(() => VehicleUpsertWithWhereUniqueWithoutVehicleModelInput)
    @ValidateNested()
    upsert?: Array<VehicleUpsertWithWhereUniqueWithoutVehicleModelInput>;

    @Field(() => VehicleCreateManyVehicleModelInputEnvelope, {nullable:true})
    @Type(() => VehicleCreateManyVehicleModelInputEnvelope)
    @ValidateNested()
    createMany?: VehicleCreateManyVehicleModelInputEnvelope;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>>;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>>;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>>;

    @Field(() => [VehicleWhereUniqueInput], {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>>;

    @Field(() => [VehicleUpdateWithWhereUniqueWithoutVehicleModelInput], {nullable:true})
    @Type(() => VehicleUpdateWithWhereUniqueWithoutVehicleModelInput)
    @ValidateNested()
    update?: Array<VehicleUpdateWithWhereUniqueWithoutVehicleModelInput>;

    @Field(() => [VehicleUpdateManyWithWhereWithoutVehicleModelInput], {nullable:true})
    @Type(() => VehicleUpdateManyWithWhereWithoutVehicleModelInput)
    @ValidateNested()
    updateMany?: Array<VehicleUpdateManyWithWhereWithoutVehicleModelInput>;

    @Field(() => [VehicleScalarWhereInput], {nullable:true})
    @Type(() => VehicleScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<VehicleScalarWhereInput>;
}
