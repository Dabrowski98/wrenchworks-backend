import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleBrandCreateWithoutVehicleModelsInput } from './vehicle-brand-create-without-vehicle-models.input';
import { Type } from 'class-transformer';
import { VehicleBrandCreateOrConnectWithoutVehicleModelsInput } from './vehicle-brand-create-or-connect-without-vehicle-models.input';
import { Prisma } from '@prisma/client';
import { VehicleBrandWhereUniqueInput } from './vehicle-brand-where-unique.input';

@InputType()
export class VehicleBrandCreateNestedOneWithoutVehicleModelsInput {
    @Field(() => VehicleBrandCreateOrConnectWithoutVehicleModelsInput, {nullable:true})
    @Type(() => VehicleBrandCreateOrConnectWithoutVehicleModelsInput)
    connectOrCreate?: VehicleBrandCreateOrConnectWithoutVehicleModelsInput;
}
