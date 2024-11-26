import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelCreateWithoutVehiclesBrandInput } from './vehicle-model-create-without-vehicles-brand.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleModelCreateOrConnectWithoutVehiclesBrandInput } from './vehicle-model-create-or-connect-without-vehicles-brand.input';
import { VehicleModelUpsertWithWhereUniqueWithoutVehiclesBrandInput } from './vehicle-model-upsert-with-where-unique-without-vehicles-brand.input';
import { VehicleModelCreateManyVehiclesBrandInputEnvelope } from './vehicle-model-create-many-vehicles-brand-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { VehicleModelUpdateWithWhereUniqueWithoutVehiclesBrandInput } from './vehicle-model-update-with-where-unique-without-vehicles-brand.input';
import { VehicleModelUpdateManyWithWhereWithoutVehiclesBrandInput } from './vehicle-model-update-many-with-where-without-vehicles-brand.input';
import { VehicleModelScalarWhereInput } from './vehicle-model-scalar-where.input';

@InputType()
export class VehicleModelUncheckedUpdateManyWithoutVehiclesBrandNestedInput {

    @Field(() => [VehicleModelCreateWithoutVehiclesBrandInput], {nullable:true})
    @Type(() => VehicleModelCreateWithoutVehiclesBrandInput)
    @ValidateNested()
    create?: Array<VehicleModelCreateWithoutVehiclesBrandInput>;

    @Field(() => [VehicleModelCreateOrConnectWithoutVehiclesBrandInput], {nullable:true})
    @Type(() => VehicleModelCreateOrConnectWithoutVehiclesBrandInput)
    @ValidateNested()
    connectOrCreate?: Array<VehicleModelCreateOrConnectWithoutVehiclesBrandInput>;

    @Field(() => [VehicleModelUpsertWithWhereUniqueWithoutVehiclesBrandInput], {nullable:true})
    @Type(() => VehicleModelUpsertWithWhereUniqueWithoutVehiclesBrandInput)
    @ValidateNested()
    upsert?: Array<VehicleModelUpsertWithWhereUniqueWithoutVehiclesBrandInput>;

    @Field(() => VehicleModelCreateManyVehiclesBrandInputEnvelope, {nullable:true})
    @Type(() => VehicleModelCreateManyVehiclesBrandInputEnvelope)
    @ValidateNested()
    createMany?: VehicleModelCreateManyVehiclesBrandInputEnvelope;

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

    @Field(() => [VehicleModelUpdateWithWhereUniqueWithoutVehiclesBrandInput], {nullable:true})
    @Type(() => VehicleModelUpdateWithWhereUniqueWithoutVehiclesBrandInput)
    @ValidateNested()
    update?: Array<VehicleModelUpdateWithWhereUniqueWithoutVehiclesBrandInput>;

    @Field(() => [VehicleModelUpdateManyWithWhereWithoutVehiclesBrandInput], {nullable:true})
    @Type(() => VehicleModelUpdateManyWithWhereWithoutVehiclesBrandInput)
    @ValidateNested()
    updateMany?: Array<VehicleModelUpdateManyWithWhereWithoutVehiclesBrandInput>;

    @Field(() => [VehicleModelScalarWhereInput], {nullable:true})
    @Type(() => VehicleModelScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<VehicleModelScalarWhereInput>;
}
