import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelCreateWithoutVehiclesInput } from './vehicle-model-create-without-vehicles.input';
import { Type } from 'class-transformer';
import { VehicleModelCreateOrConnectWithoutVehiclesInput } from './vehicle-model-create-or-connect-without-vehicles.input';
import { VehicleModelUpsertWithoutVehiclesInput } from './vehicle-model-upsert-without-vehicles.input';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { VehicleModelUpdateToOneWithWhereWithoutVehiclesInput } from './vehicle-model-update-to-one-with-where-without-vehicles.input';

@InputType()
export class VehicleModelUpdateOneRequiredWithoutVehiclesNestedInput {

    @Field(() => VehicleModelCreateWithoutVehiclesInput, {nullable:true})
    @Type(() => VehicleModelCreateWithoutVehiclesInput)
    create?: VehicleModelCreateWithoutVehiclesInput;

    @Field(() => VehicleModelCreateOrConnectWithoutVehiclesInput, {nullable:true})
    @Type(() => VehicleModelCreateOrConnectWithoutVehiclesInput)
    connectOrCreate?: VehicleModelCreateOrConnectWithoutVehiclesInput;

    @Field(() => VehicleModelUpsertWithoutVehiclesInput, {nullable:true})
    @Type(() => VehicleModelUpsertWithoutVehiclesInput)
    upsert?: VehicleModelUpsertWithoutVehiclesInput;

    @Field(() => VehicleModelWhereUniqueInput, {nullable:true})
    @Type(() => VehicleModelWhereUniqueInput)
    connect?: Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brandName'>;

    @Field(() => VehicleModelUpdateToOneWithWhereWithoutVehiclesInput, {nullable:true})
    @Type(() => VehicleModelUpdateToOneWithWhereWithoutVehiclesInput)
    update?: VehicleModelUpdateToOneWithWhereWithoutVehiclesInput;
}
