import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelCreateWithoutVehiclesInput } from './vehicle-model-create-without-vehicles.input';
import { HideField } from '@nestjs/graphql';
import { VehicleModelCreateOrConnectWithoutVehiclesInput } from './vehicle-model-create-or-connect-without-vehicles.input';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleModelCreateNestedOneWithoutVehiclesInput {

    @HideField()
    create?: VehicleModelCreateWithoutVehiclesInput;

    @HideField()
    connectOrCreate?: VehicleModelCreateOrConnectWithoutVehiclesInput;

    @Field(() => VehicleModelWhereUniqueInput, {nullable:true})
    @Type(() => VehicleModelWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>;
}
