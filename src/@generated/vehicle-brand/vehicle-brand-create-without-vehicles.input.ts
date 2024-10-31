import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelCreateNestedManyWithoutVehiclesBrandInput } from '../vehicle-model/vehicle-model-create-nested-many-without-vehicles-brand.input';

@InputType()
export class VehicleBrandCreateWithoutVehiclesInput {

    @Field(() => String, {nullable:false})
    brandName!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VehicleModelCreateNestedManyWithoutVehiclesBrandInput, {nullable:true})
    vehicleModels?: VehicleModelCreateNestedManyWithoutVehiclesBrandInput;
}
