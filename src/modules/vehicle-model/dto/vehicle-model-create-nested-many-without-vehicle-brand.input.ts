import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelCreateWithoutVehicleBrandInput } from './vehicle-model-create-without-vehicle-brand.input';
import { HideField } from '@nestjs/graphql';
import { VehicleModelCreateOrConnectWithoutVehicleBrandInput } from './vehicle-model-create-or-connect-without-vehicle-brand.input';
import { VehicleModelCreateManyVehicleBrandInputEnvelope } from './vehicle-model-create-many-vehicle-brand-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleModelCreateNestedManyWithoutVehicleBrandInput {

    @Field(() => [VehicleModelWhereUniqueInput], {nullable:true})
    @Type(() => VehicleModelWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>>;
}