import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelCreateWithoutVehicleBrandInput } from './vehicle-model-create-without-vehicle-brand.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleModelCreateOrConnectWithoutVehicleBrandInput } from './vehicle-model-create-or-connect-without-vehicle-brand.input';
import { VehicleModelUpsertWithWhereUniqueWithoutVehicleBrandInput } from './vehicle-model-upsert-with-where-unique-without-vehicle-brand.input';
import { VehicleModelCreateManyVehicleBrandInputEnvelope } from './vehicle-model-create-many-vehicle-brand-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { VehicleModelUpdateWithWhereUniqueWithoutVehicleBrandInput } from './vehicle-model-update-with-where-unique-without-vehicle-brand.input';
import { VehicleModelUpdateManyWithWhereWithoutVehicleBrandInput } from './vehicle-model-update-many-with-where-without-vehicle-brand.input';
import { VehicleModelScalarWhereInput } from './vehicle-model-scalar-where.input';

@InputType()
export class VehicleModelUncheckedUpdateManyWithoutVehicleBrandNestedInput {

    @Field(() => [VehicleModelCreateWithoutVehicleBrandInput], {nullable:true})
    @Type(() => VehicleModelCreateWithoutVehicleBrandInput)
    @ValidateNested()
    create?: Array<VehicleModelCreateWithoutVehicleBrandInput>;

    @Field(() => [VehicleModelCreateOrConnectWithoutVehicleBrandInput], {nullable:true})
    @Type(() => VehicleModelCreateOrConnectWithoutVehicleBrandInput)
    @ValidateNested()
    connectOrCreate?: Array<VehicleModelCreateOrConnectWithoutVehicleBrandInput>;

    @Field(() => [VehicleModelUpsertWithWhereUniqueWithoutVehicleBrandInput], {nullable:true})
    @Type(() => VehicleModelUpsertWithWhereUniqueWithoutVehicleBrandInput)
    @ValidateNested()
    upsert?: Array<VehicleModelUpsertWithWhereUniqueWithoutVehicleBrandInput>;

    @Field(() => VehicleModelCreateManyVehicleBrandInputEnvelope, {nullable:true})
    @Type(() => VehicleModelCreateManyVehicleBrandInputEnvelope)
    @ValidateNested()
    createMany?: VehicleModelCreateManyVehicleBrandInputEnvelope;

    @Field(() => [VehicleModelWhereUniqueInput], {nullable:true})
    @Type(() => VehicleModelWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>>;

    @Field(() => [VehicleModelWhereUniqueInput], {nullable:true})
    @Type(() => VehicleModelWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>>;

    @Field(() => [VehicleModelWhereUniqueInput], {nullable:true})
    @Type(() => VehicleModelWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>>;

    @Field(() => [VehicleModelWhereUniqueInput], {nullable:true})
    @Type(() => VehicleModelWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>>;

    @Field(() => [VehicleModelUpdateWithWhereUniqueWithoutVehicleBrandInput], {nullable:true})
    @Type(() => VehicleModelUpdateWithWhereUniqueWithoutVehicleBrandInput)
    @ValidateNested()
    update?: Array<VehicleModelUpdateWithWhereUniqueWithoutVehicleBrandInput>;

    @Field(() => [VehicleModelUpdateManyWithWhereWithoutVehicleBrandInput], {nullable:true})
    @Type(() => VehicleModelUpdateManyWithWhereWithoutVehicleBrandInput)
    @ValidateNested()
    updateMany?: Array<VehicleModelUpdateManyWithWhereWithoutVehicleBrandInput>;

    @Field(() => [VehicleModelScalarWhereInput], {nullable:true})
    @Type(() => VehicleModelScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<VehicleModelScalarWhereInput>;
}
