import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelCreateWithoutVehiclesBrandInput } from './vehicle-model-create-without-vehicles-brand.input';
import { Type } from 'class-transformer';
import { VehicleModelCreateOrConnectWithoutVehiclesBrandInput } from './vehicle-model-create-or-connect-without-vehicles-brand.input';
import { VehicleModelUpsertWithWhereUniqueWithoutVehiclesBrandInput } from './vehicle-model-upsert-with-where-unique-without-vehicles-brand.input';
import { VehicleModelCreateManyVehiclesBrandInputEnvelope } from './vehicle-model-create-many-vehicles-brand-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { VehicleModelUpdateWithWhereUniqueWithoutVehiclesBrandInput } from './vehicle-model-update-with-where-unique-without-vehicles-brand.input';
import { VehicleModelUpdateManyWithWhereWithoutVehiclesBrandInput } from './vehicle-model-update-many-with-where-without-vehicles-brand.input';
import { VehicleModelScalarWhereInput } from './vehicle-model-scalar-where.input';

@InputType()
export class VehicleModelUpdateManyWithoutVehiclesBrandNestedInput {

    @Field(() => [VehicleModelCreateWithoutVehiclesBrandInput], {nullable:true})
    @Type(() => VehicleModelCreateWithoutVehiclesBrandInput)
    create?: Array<VehicleModelCreateWithoutVehiclesBrandInput>;

    @Field(() => [VehicleModelCreateOrConnectWithoutVehiclesBrandInput], {nullable:true})
    @Type(() => VehicleModelCreateOrConnectWithoutVehiclesBrandInput)
    connectOrCreate?: Array<VehicleModelCreateOrConnectWithoutVehiclesBrandInput>;

    @Field(() => [VehicleModelUpsertWithWhereUniqueWithoutVehiclesBrandInput], {nullable:true})
    @Type(() => VehicleModelUpsertWithWhereUniqueWithoutVehiclesBrandInput)
    upsert?: Array<VehicleModelUpsertWithWhereUniqueWithoutVehiclesBrandInput>;

    @Field(() => VehicleModelCreateManyVehiclesBrandInputEnvelope, {nullable:true})
    @Type(() => VehicleModelCreateManyVehiclesBrandInputEnvelope)
    createMany?: VehicleModelCreateManyVehiclesBrandInputEnvelope;

    @Field(() => [VehicleModelWhereUniqueInput], {nullable:true})
    @Type(() => VehicleModelWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brandName'>>;

    @Field(() => [VehicleModelWhereUniqueInput], {nullable:true})
    @Type(() => VehicleModelWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brandName'>>;

    @Field(() => [VehicleModelWhereUniqueInput], {nullable:true})
    @Type(() => VehicleModelWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brandName'>>;

    @Field(() => [VehicleModelWhereUniqueInput], {nullable:true})
    @Type(() => VehicleModelWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brandName'>>;

    @Field(() => [VehicleModelUpdateWithWhereUniqueWithoutVehiclesBrandInput], {nullable:true})
    @Type(() => VehicleModelUpdateWithWhereUniqueWithoutVehiclesBrandInput)
    update?: Array<VehicleModelUpdateWithWhereUniqueWithoutVehiclesBrandInput>;

    @Field(() => [VehicleModelUpdateManyWithWhereWithoutVehiclesBrandInput], {nullable:true})
    @Type(() => VehicleModelUpdateManyWithWhereWithoutVehiclesBrandInput)
    updateMany?: Array<VehicleModelUpdateManyWithWhereWithoutVehiclesBrandInput>;

    @Field(() => [VehicleModelScalarWhereInput], {nullable:true})
    @Type(() => VehicleModelScalarWhereInput)
    deleteMany?: Array<VehicleModelScalarWhereInput>;
}
