import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { VehicleCreateNestedManyWithoutVehicleModelInput } from '../vehicle/vehicle-create-nested-many-without-vehicle-model.input';
import { Type } from 'class-transformer';
import { VehicleBrandCreateNestedOneWithoutVehicleModelsInput } from '../vehicle-brand/vehicle-brand-create-nested-one-without-vehicle-models.input';

@InputType()
export class VehicleModelCreateInput {

    @HideField()
    modelId?: bigint | number;

    @Field(() => String, {nullable:false})
    modelName!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VehicleCreateNestedManyWithoutVehicleModelInput, {nullable:true})
    @Type(() => VehicleCreateNestedManyWithoutVehicleModelInput)
    vehicles?: VehicleCreateNestedManyWithoutVehicleModelInput;

    @Field(() => VehicleBrandCreateNestedOneWithoutVehicleModelsInput, {nullable:false})
    vehiclesBrand!: VehicleBrandCreateNestedOneWithoutVehicleModelsInput;
}
