import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateNestedManyWithoutVehicleBrandInput } from '../vehicle/vehicle-create-nested-many-without-vehicle-brand.input';
import { Type } from 'class-transformer';
import { VehicleModelCreateNestedManyWithoutVehiclesBrandInput } from '../vehicle-model/vehicle-model-create-nested-many-without-vehicles-brand.input';

@InputType()
export class VehicleBrandCreateInput {

    @Field(() => String, {nullable:false})
    brandName!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VehicleCreateNestedManyWithoutVehicleBrandInput, {nullable:true})
    @Type(() => VehicleCreateNestedManyWithoutVehicleBrandInput)
    vehicles?: VehicleCreateNestedManyWithoutVehicleBrandInput;

    @Field(() => VehicleModelCreateNestedManyWithoutVehiclesBrandInput, {nullable:true})
    vehicleModels?: VehicleModelCreateNestedManyWithoutVehiclesBrandInput;
}
