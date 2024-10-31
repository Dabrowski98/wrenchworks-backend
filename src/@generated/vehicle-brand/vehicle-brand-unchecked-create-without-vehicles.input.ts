import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelUncheckedCreateNestedManyWithoutVehiclesBrandInput } from '../vehicle-model/vehicle-model-unchecked-create-nested-many-without-vehicles-brand.input';

@InputType()
export class VehicleBrandUncheckedCreateWithoutVehiclesInput {

    @Field(() => String, {nullable:false})
    brandName!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VehicleModelUncheckedCreateNestedManyWithoutVehiclesBrandInput, {nullable:true})
    vehicleModels?: VehicleModelUncheckedCreateNestedManyWithoutVehiclesBrandInput;
}
