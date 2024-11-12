import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelCreateWithoutVehiclesInput } from './vehicle-model-create-without-vehicles.input';
import { Type } from 'class-transformer';
import { VehicleModelCreateOrConnectWithoutVehiclesInput } from './vehicle-model-create-or-connect-without-vehicles.input';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';

@InputType()
export class VehicleModelCreateNestedOneWithoutVehiclesInput {

    @Field(() => VehicleModelCreateWithoutVehiclesInput, {nullable:true})
    @Type(() => VehicleModelCreateWithoutVehiclesInput)
    create?: VehicleModelCreateWithoutVehiclesInput;

    @Field(() => VehicleModelCreateOrConnectWithoutVehiclesInput, {nullable:true})
    @Type(() => VehicleModelCreateOrConnectWithoutVehiclesInput)
    connectOrCreate?: VehicleModelCreateOrConnectWithoutVehiclesInput;

    @Field(() => VehicleModelWhereUniqueInput, {nullable:true})
    @Type(() => VehicleModelWhereUniqueInput)
    connect?: Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brandName'>;
}
