import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelCreateWithoutVehiclesBrandInput } from './vehicle-model-create-without-vehicles-brand.input';
import { HideField } from '@nestjs/graphql';
import { VehicleModelCreateOrConnectWithoutVehiclesBrandInput } from './vehicle-model-create-or-connect-without-vehicles-brand.input';
import { VehicleModelCreateManyVehiclesBrandInputEnvelope } from './vehicle-model-create-many-vehicles-brand-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleModelCreateNestedManyWithoutVehiclesBrandInput {

    @HideField()
    create?: Array<VehicleModelCreateWithoutVehiclesBrandInput>;

    @HideField()
    connectOrCreate?: Array<VehicleModelCreateOrConnectWithoutVehiclesBrandInput>;

    @HideField()
    createMany?: VehicleModelCreateManyVehiclesBrandInputEnvelope;

    @Field(() => [VehicleModelWhereUniqueInput], {nullable:true})
    @Type(() => VehicleModelWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>>;
}
